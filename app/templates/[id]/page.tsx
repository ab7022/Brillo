import ConfirmationModal from "@/components/ConfirmationModal";
import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import TemplateDetails from "@/components/templates/TemplateDetails";
import { redirect } from "next/navigation";
import TemplateData from "@/data/templates";

const TemplatePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const template = TemplateData.find((tmpl) => tmpl.id === id);

  const session = await getUser();
  if (!session) {
    redirect("https://eazyfolio.com/auth/signin?callbackUrl=https%3A%2F%2Feazyfolio.com%2F");
  }

  if (template) {
    return (
      <>
        <Header session={session} />
        <TemplateDetails id={id} template={template} session={session} />
      </>
    );
  }
};
export default TemplatePage;