import { Center, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";
// import { useContext, useEffect } from "react";
import { fetchExample } from "../../api/query/ExampleQuery";
import { useQuery } from "react-query";
// import { AuthContext } from "../../provider/AuthProvider";

const Dashboard = ({}) => {

  // const {name} = useContext(AuthContext);
  // console.log("NAME", name);

  // const exampleQuery = useQuery({
  //   queryKey: ["example"],
  //   queryFn: fetchExample,
  // });

  // if (exampleQuery.isLoading)
  //   return (
  //     <Center minH="100vh">
  //       <Spinner size="xl" />
  //     </Center>
  //   );

  // const { data, error, isLoading } = useQuery({
  //   queryKey: ['example'],
  //   queryFn: fetchExample,
  // });

  const { data, error, isLoading } = useQuery(['example'], fetchExample);

  if (isLoading) {
    console.log('Loading data...');
    return (
      <Center minH="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    console.error('Error fetching data:', error);
    return (
      <Center minH="100vh">
        <Text color="red.500">Error fetching data: {error.message}</Text>
      </Center>
    );
  }

  console.log('Data fetched:', data);

  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/dot_bg.svg"
            text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            tagText="Contact"
            imgUrl="/grid_bg.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
