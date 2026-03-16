import ResumeViewer from "@/components/ui/ResumeViewer";
import { constructMetadata } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "Resume | Om Thakkar",
  description: "Om Thakkar's resume.",
});

export default function ResumePage() {
  return <ResumeViewer />;
}
