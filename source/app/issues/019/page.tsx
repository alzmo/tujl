import { IssuePage } from "../../issue-page";
import { issue019 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue019);

export default function Issue019Page() {
  return <IssuePage issue={issue019} />;
}
