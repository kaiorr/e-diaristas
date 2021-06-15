import { SafeEnvironment } from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import { PageTitle } from "ui/components/data-display/Page-Title/PageTitle";
import { UserInformation } from "ui/components/data-display/UserInformation/UserInformation";
import { TextFieldMask } from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {Button, Typography, Container} from '@material-ui/core'
import { FormElementsContainer, ProfessionalPaper, ProfessionalContainer } from 'ui/styles/pages/index.style'

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


      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={"Digite seu CEP"}
            fullWidth
            variant={'outlined'}
          />
          <Typography color={'error'} > CEP Inválido </Typography>
          <Button variant={'contained'} color={'secondary'} sx={{ width: '220px' }}>
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfessionalPaper>
            <ProfessionalContainer>
            <UserInformation
              name={"Kaio Ribeiro"}
              picture={"https://github.com/kaiorr.png"}
              rating={2}
              description={"Goiânia"}
            />
            <UserInformation
              name={"Kaio Ribeiro"}
              picture={"https://github.com/kaiorr.png"}
              rating={2}
              description={"Goiânia"}
            />
            <UserInformation
              name={"Kaio Ribeiro"}
              picture={"https://github.com/kaiorr.png"}
              rating={2}
              description={"Goiânia"}
            />
            <UserInformation
            name={"Kaio Ribeiro"}
            picture={"https://github.com/kaiorr.png"}
            rating={2}
            description={"Goiânia"}
          />
            <UserInformation
              name={"Kaio Ribeiro"}
              picture={"https://github.com/kaiorr.png"}
              rating={2}
              description={"Goiânia"}
            />
            <UserInformation
              name={"Kaio Ribeiro"}
              picture={"https://github.com/kaiorr.png"}
              rating={2}
              description={"Goiânia"}
            />
            <UserInformation
              name={"Kaio Ribeiro"}
              picture={"https://github.com/kaiorr.png"}
              rating={2}
              description={"Goiânia"}
            />
          </ProfessionalContainer>
        </ProfessionalPaper>
      </Container>



    </div>
  );
}
