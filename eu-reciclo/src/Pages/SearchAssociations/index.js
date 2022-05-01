import React from 'react';
import { Container, PageContainer, MapContainer } from './style';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header/Header';
import MapForm from '../../Components/MapForm/MapForm';

const SearchAssociations = () => {
  return (
    <PageContainer>
      <Header />
      <Container>
        <MapContainer>{MapForm()}</MapContainer>
      </Container>
      <Footer />
    </PageContainer>
  );
};

export default SearchAssociations;
