import VoiceOfCustomerGlossaryWrapper from "@/components/wrapper/resources/voice-of-customer-glossory";
import glossaryData from "@/lib/data/resources/voice-of-customer-glossary/data.json"

export default function VoiceOfCustomerGlossary() {
  return (
    <>
      <VoiceOfCustomerGlossaryWrapper data={glossaryData} />
    </>
  );
}
