import { SafeEnvironment } from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import { PageTitle } from "ui/components/data-display/Page-Title/PageTitle";
import { UserInformation } from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos profissionais da sua localidade"
        }
      />

      <UserInformation
        name={"Kaio Ribeiro"}
        picture={"https://github.com/kaiorr.png"}
        rating={2}
        description={"Goiânia"}
      />
    </div>
  );
}
