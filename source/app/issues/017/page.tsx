import { IssuePage } from "../../issue-page";
import { issue017 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue017);

export default function Issue017Page() {
  return <IssuePage issue={issue017} />;
}
