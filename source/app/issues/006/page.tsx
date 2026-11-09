import { IssuePage } from "../../issue-page";
import { issue006 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue006);

export default function Issue006Page() {
  return <IssuePage issue={issue006} />;
}
