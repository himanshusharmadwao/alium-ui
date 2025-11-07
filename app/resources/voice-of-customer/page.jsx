import VoiceOfCustomerWrapper from "@/components/wrapper/resources/voice-of-customer";
import vocData from "@/lib/data/resources/voice-of-customer/data.json";

export default function VoiceOfCustomerGlossary() {
  return (
    <>
      <VoiceOfCustomerWrapper data={vocData} />
    </>
  );
}
