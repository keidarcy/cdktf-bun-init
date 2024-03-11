import { provider, s3Bucket } from "@cdktf/provider-aws";
import { App, TerraformStack } from "cdktf";
import type { Construct } from "constructs";

const app = new App();

class CdktfStack extends TerraformStack {
	constructor(scope: Construct, id: string) {
		super(scope, id);

		new provider.AwsProvider(this, "aws", {});

		// new s3Bucket.S3Bucket(this, "test-bucket", {
		// 	bucket: "cdktf-bun-init-bucket",
		// });
	}
}
new CdktfStack(app, "cdktf-stack");

app.synth();
