import { IssuePage } from "./issue-page";
import { issue078 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue078);

export default function Home() {
  return <IssuePage issue={issue078} />;
}
