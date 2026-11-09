import { IssuePage } from "../../issue-page";
import { issue018 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue018);

export default function Issue018Page() {
  return <IssuePage issue={issue018} />;
}
