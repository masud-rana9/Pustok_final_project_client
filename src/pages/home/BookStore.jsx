// In BookStore.js
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useBooks from "../../hooks/useBooks";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import CatewiseBook from "../../components/CatewiseBook";

const BookStore = () => {
  const [books] = useBooks();
  const categories = ["Medical", "University", "Thriller", "History", "School"];
  const { CategoryName } = useParams();
  console.log(CategoryName);
  const initialIndex = categories.indexOf(CategoryName);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const medicalBooks = books.filter((item) => item.category === "Medical");
  const schoolBooks = books.filter((item) => item.category === "School");
  const universityBooks = books.filter(
    (item) => item.category === "University"
  );
  const historyBooks = books.filter((item) => item.category === "History");
  const thrillerBooks = books.filter((item) => item.category === "Thriller");

  return (
    <div className="mt-40">
      <Helmet>
        <title>Pustok || Book Store</title>
        <meta name="description" content="Pustok || Book Store" />
      </Helmet>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Medical</Tab>
          <Tab>University</Tab>
          <Tab>Thriller</Tab>
          <Tab>History</Tab>
          <Tab>School</Tab>
        </TabList>

        <TabPanel>
          <CatewiseBook categorybooks={medicalBooks} key={medicalBooks} />
        </TabPanel>
        <TabPanel>
          <CatewiseBook categorybooks={universityBooks} key={universityBooks} />
        </TabPanel>
        <TabPanel>
          <CatewiseBook categorybooks={thrillerBooks} key={thrillerBooks} />
        </TabPanel>
        <TabPanel>
          <CatewiseBook categorybooks={historyBooks} key={historyBooks} />
        </TabPanel>
        <TabPanel>
          <CatewiseBook categorybooks={schoolBooks} key={schoolBooks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookStore;
