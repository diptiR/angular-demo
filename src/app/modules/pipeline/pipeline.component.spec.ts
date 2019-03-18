import {PipelineComponent} from './pipeline.component';

describe("Testing Pipeline component", {
  let component;
  let mockRouterService;
  let mockPipelineService;

  beforeEach({
    component = new PipelineComponent();
    mockRouterService = jasmine.createSpyObject(["navigate"])
  })
});
