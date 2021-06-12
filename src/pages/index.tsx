import { SafeEnvironment } from "ui/components/feedback/SafeEnvironment/SafeEnvironment"
import { PageTitle } from 'ui/components/data-display/Page-Title/PageTitle'

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos profissionais da sua localidade'}
      />
    </div>
  )
}
