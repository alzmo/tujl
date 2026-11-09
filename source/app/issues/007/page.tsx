import { IssuePage } from "../../issue-page";
import { issue007 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue007);

export default function Issue007Page() {
  return <IssuePage issue={issue007} />;
}
