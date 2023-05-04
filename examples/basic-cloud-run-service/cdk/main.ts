import { Container } from "@cdktf/provider-docker/lib/container";
import { Image } from "@cdktf/provider-docker/lib/image";
import { DockerProvider } from "@cdktf/provider-docker/lib/provider";

import {
  GoogleProvider,
  GoogleProviderConfig,
} from "@cdktf/provider-google/lib/provider";

import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { nginxContainerConfig } from "./container";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const image = new Image(this, "nginx-image", {
      name: "nginx:latest",
      keepLocally: false,
    });

    const providerConfig: GoogleProviderConfig = {
      zone: "us-cental1-c",
    };
    new Container(this, "nginx-container", nginxContainerConfig(image));
    new DockerProvider(this, "string");
  }
}

const app = new App();
new MyStack(app, "basic-cloud-run-service");
app.synth();
