import { ContainerConfig } from "@cdktf/provider-docker/lib/container";
import { Image } from "@cdktf/provider-docker/lib/image";

export const nginxContainerConfig = ({
  name: image,
}: Image): ContainerConfig => ({
  image,
  name: "tutorial",
  ports: [{ internal: 80, external: 8080 }],
});
