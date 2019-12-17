import React, { useEffect } from "react";

interface SynthesisHelperProps {
  onGetVoice: (voice: false | SpeechSynthesisVoice) => void;
}

function getVoice() {
  const voices = speechSynthesis.getVoices();

  if (voices.length === 0) {
    return false;
  }

  const desiredVoice = voices.find((v) => v.voiceURI === "Daniel");

  return desiredVoice || voices.find((v) => v.default) || voices[0];
}

const SynthesisHelper: React.FC<SynthesisHelperProps> = ({ onGetVoice }) => {
  useEffect(() => {
    if (typeof speechSynthesis === "undefined") {
      onGetVoice(false);
      return;
    }

    const voice = getVoice();

    if (!voice) {
      speechSynthesis.addEventListener("voiceschanged", function() {
        onGetVoice(getVoice());
      });
    } else {
      onGetVoice(voice);
    }
  }, []);

  return null;
};

export default SynthesisHelper;
