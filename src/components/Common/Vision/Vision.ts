const VISION_ENDPOINT = "https://vision.googleapis.com/v1/images:annotate";
const VISION_KEY = "AIzaSyAvpqS9FQJcdtN2kJqwG_0Sj0ORbFK2DQk";

export const TEST_LABELS = [
  ["Yellow", "Sitting", "Room", "Furniture", "Table"],
  ["Architecture", "Wood", "Line", "Stairs", "Boardwalk"],
  ["Snow", "Winter", "House", "Architecture", "Home"],
  ["Road", "Street", "Town", "Neighbourhood", "Lane"],
];

type ImageRequest = {
  image: {
    content: string;
  };
  features: Array<{
    type: string;
    maxResults: number;
    model?: string;
  }>;
};

type ImageAnnotateResponse = {
  labelAnnotations: Array<{
    description: string;
    mid: string;
    score: number;
    topicality: number;
  }>;
};

class Vision {
  /** Cloud vision API key */
  private _key: string;

  /** Specific Vision API Annotate endpoint */
  private _endpoint: string;

  /** Whether or not to run production mode */
  private _debug: boolean;

  /** Total images that can be fetched */
  private _maxRequests: number;

  constructor(debug: boolean = true, maxRequests: number = 4) {
    this._key = VISION_KEY;
    this._endpoint = VISION_ENDPOINT;

    this._debug = debug;

    this._maxRequests = maxRequests;
  }

  isDebug() {
    return this._debug;
  }

  /**
   * Public method to get labels from images
   *
   * @param images
   */
  getLabels(images: Array<string>) {
    if (this.isDebug()) {
      return Promise.resolve(TEST_LABELS);
    }

    const imageObjects = images
      .slice(0, this._maxRequests)
      .map((img) => this._createImageObject(img));

    return this._makeRequest(imageObjects);
  }

  /**
   * Fetch wrap method to send the request
   *
   * @param imageObjects
   */
  _makeRequest(imageObjects: Array<ImageRequest>) {
    const apiURL = `${this._endpoint}?key=${this._key}`;

    return fetch(apiURL, {
      method: "POST",
      body: JSON.stringify({
        requests: imageObjects,
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        return json.responses.map((resp: ImageAnnotateResponse) => {
          return resp.labelAnnotations.map(({ description }) => description);
        });
      })
      .catch((err) => {
        throw new Error("There was an error retrieving the image labels");
      });
  }

  /**
   * Turns the base64 image into the object
   * necessary for sending to the vision API.
   * With default settings
   *
   * @param base64Image
   */
  _createImageObject(base64Image: string) {
    return {
      image: {
        content: this._stripBase64Prefix(base64Image),
      },
      features: [
        {
          type: "LABEL_DETECTION",
          maxResults: 5,
          model: "builtin/latest",
        },
      ],
    };
  }

  _stripBase64Prefix(img: string) {
    const prefix = img.substr(
      img.indexOf("data:image"),
      img.indexOf(";base64,")
    );

    return img.replace(`${prefix};base64,`, "");
  }
}

export default Vision;
