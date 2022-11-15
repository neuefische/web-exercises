import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({ entries }) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge active>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            <Entry date={entry.date} motto={entry.motto} notes={entry.notes} />
            {index < entries.length - 1 ? <Divider /> : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
