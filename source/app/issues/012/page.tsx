import { IssuePage } from "../../issue-page";
import { issue012 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue012);

export default function Issue012Page() {
  return <IssuePage issue={issue012} />;
}
