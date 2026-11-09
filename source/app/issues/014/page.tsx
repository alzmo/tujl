import { IssuePage } from "../../issue-page";
import { issue014 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue014);

export default function Issue014Page() {
  return <IssuePage issue={issue014} />;
}
