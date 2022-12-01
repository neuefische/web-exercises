import Introduction from "../../components/Introduction";
import Main from "../../components/Main";
import Section from "../../components/Section";
import VolumeList from "../../components/VolumeList";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <Main gap={48}>
      <Introduction
        title={
          <>
            The Lord of
            <br />
            the Rings
          </>
        }
        text={introduction}
      />
      <Section>
        <h2>All Volumes</h2>
        <VolumeList volumes={volumes} />
      </Section>
    </Main>
  );
}
