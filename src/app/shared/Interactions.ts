export class AbstractInteraction {
  constructor (
    public CreateTime: string,
    public CurrentStep: string,
    public Handler: string
  ) {

  }
}

export class TicketCheck extends AbstractInteraction{
  constructor (
    public CreateTime: string,
    public CurrentStep: string,
    public Handler: string,
    public CheckResult: string,
    public CheckSuggestion: string
  ) {
    super( CreateTime, CurrentStep , Handler );
  }
}


export class PreAnalysis extends AbstractInteraction{
  constructor (
    public CreateTime: string,
    public CurrentStep: string,
    public Handler: string,
    public AnalysisResult: string,
    public AnalysisSuggestion: string
  ) {
    super( CreateTime, CurrentStep , Handler );
  }
}

export class Solve extends AbstractInteraction{
  constructor (
    public CreateTime: string,
    public CurrentStep: string,
    public Handler: string,
    public RootCause: string,
    public Implementation: string,
    public TestSuggestion: string
  ) {
    super( CreateTime, CurrentStep , Handler );
  }
}
