import { GaleryManagement } from '../common/GaleryManagement';
import { SectionHeader } from '../common/SectionHeader';
import { SectionContainer } from '../layouts/SectionContainer';
import { management, staff } from './data/teamMembers';

export const TeamSection = () => {
  return (
    <section>
      <SectionContainer>
        <SectionHeader
          title="Meet our team of flower experts"
          subtitle="Behind every Floria bouquet is a passionate team that loves flowers and cares about every detail. "
          mb={10}
        />
        <GaleryManagement data={management} />
        <GaleryManagement data={staff} columns={4} />
      </SectionContainer>
    </section>
  );
};
