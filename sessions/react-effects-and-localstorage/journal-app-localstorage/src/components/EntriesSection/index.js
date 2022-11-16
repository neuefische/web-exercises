import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({
  entries,
  onToggleFavorite,
  filter,
  amountAllEntries,
  amountFavoriteEntries,
  onShowAllEntries,
  onShowFavoriteEntries,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab onClick={onShowAllEntries} active={filter === 'all'}>
          All Entries <Badge active={filter === 'all'}>{amountAllEntries}</Badge>
        </Tab>
        <Tab onClick={onShowFavoriteEntries} active={showFavorites}>
          Favorites{" "}
          <Badge active={showFavorites}>{amountFavoriteEntries}</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
            {index < entries.length - 1 ? <Divider /> : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
