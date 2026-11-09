import { IssuePage } from "../../issue-page";
import { issue013 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue013);

export default function Issue013Page() {
  return <IssuePage issue={issue013} />;
}
