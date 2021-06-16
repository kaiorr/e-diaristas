import { SafeEnvironment } from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import { PageTitle } from "ui/components/data-display/Page-Title/PageTitle";
import { UserInformation } from "ui/components/data-display/UserInformation/UserInformation";
import { TextFieldMask } from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementsContainer,
  ProfessionalPaper,
  ProfessionalContainer,
} from "ui/styles/pages/index.style";
import useIndex from "hooks/pages/useIndex";
import { ValidationService } from "data/services/ValidationService";

export default function Home() {
  const {
    cep,
    setCep,
    cepValid,
    findDiarist,
    error,
    diarist,
    find,
    loading,
    remainingDiarist,
  } = useIndex();

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
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {error && <Typography color={"error"}> {error} </Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValid || loading}
            onClick={() => findDiarist(cep)}
          >
            {loading ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {find &&
          (diarist.length > 0 ? (
            <ProfessionalPaper>
              <ProfessionalContainer>
                {diarist.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.name}
                      picture={item.avatar}
                      rating={item.rating}
                      description={item.city}
                    />
                  );
                })}
              </ProfessionalContainer>

              <Container>
                {remainingDiarist > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {remainingDiarist}{" "}
                    {remainingDiarist > 1
                      ? "profissionais atendem "
                      : "profissional atende "}
                    ao seu endereço.
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar Profissional
                </Button>
              </Container>
            </ProfessionalPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista disponível em sua região!!!
            </Typography>
          ))}
      </Container>
    </div>
  );
}
