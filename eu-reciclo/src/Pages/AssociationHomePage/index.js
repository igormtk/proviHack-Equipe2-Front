import { Container, ContentContainer } from './style';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import ResiduesCard from '../../Components/ResiduesCard';
import { useResiduesContext } from '../../Contexts/residuesContext';

const AssociationHomePage = () => {
  const { residues } = useResiduesContext();

  return (
    <Container>
      <Header />
      <ContentContainer>
        {residues?.map((residue, index) => (
          <ResiduesCard key={index} data={residue} />
        ))}
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default AssociationHomePage;
