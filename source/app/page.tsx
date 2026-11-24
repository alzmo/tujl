import { IssuePage } from "./issue-page";
import { issue079 } from "./issues";
import { issueMetadata } from "./issue-metadata";

export const metadata = issueMetadata(issue079);

export default function Home() {
  return <IssuePage issue={issue079} />;
}
