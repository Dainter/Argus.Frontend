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

export class Evaluate extends AbstractInteraction{
  constructor (
    public CreateTime: string,
    public CurrentStep: string,
    public Handler: string,
    public SolutionComments: string
  ) {
    super( CreateTime, CurrentStep , Handler );
  }
}

export class Regression extends AbstractInteraction{
  constructor (
    public CreateTime: string,
    public CurrentStep: string,
    public Handler: string,
    public TestReport: string
  ) {
    super( CreateTime, CurrentStep , Handler );
  }
}

export class Feedback extends AbstractInteraction{
  constructor (
    public CreateTime: string,
    public CurrentStep: string,
    public Handler: string,
    public FixPlan: string,
    public Feedback: string
  ) {
    super( CreateTime, CurrentStep , Handler );
  }
}
