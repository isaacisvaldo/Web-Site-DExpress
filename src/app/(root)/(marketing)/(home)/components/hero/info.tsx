import { Actions } from './actions'
// import { SocialProof } from './socialProof'
// import { TrustIndicator } from './trustIndicator'

export function Info() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-primary">Conexões</span> que transformam{' '}
          <span className="text-foreground">lares e carreiras</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-lg">
          Conectamos empregadores a profissionais domésticas qualificadas, com segurança e
          eficiência.
        </p>
      </div>
      <Actions />
      {/* <SocialProof /> */}
      {/* <TrustIndicator /> */}
    </div>
  )
}
