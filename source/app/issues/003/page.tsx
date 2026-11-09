import { IssuePage } from "../../issue-page";
import { issue003 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue003);

export default function Issue003() {
  return <IssuePage issue={issue003} />;
}
