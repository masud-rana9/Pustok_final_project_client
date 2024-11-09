// In BookStore.js
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useBooks from "../../hooks/useBooks";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import image from "../../assets/bookstore.webp";
import CatewiseBook from "../../components/CatewiseBook";
import BookCover from "./components/BookCover";
import SectionTitle from "../../components/SectionTitle";

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
    <div className="mb-14">
      <Helmet>
        <title>Pustok || Book Store</title>
        <meta name="description" content="Pustok || Book Store" />
      </Helmet>

      <div className="mb-16">
        <BookCover
          decription={"Welcome to Our Book Store"}
          image={image}
          title={"Welcome to Our Book Store "}
          height="lg:h-[60vh]"
        />
      </div>

      <div className="my-20 ">
        <SectionTitle
          header={"All Categories of Books "}
          headerTitle={"Book Store"}
        />
      </div>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>
            <h1 className="md:text-3xl text-base ">Medical</h1>
          </Tab>
          <Tab>
            <h1 className="md:text-3xl text-base"> University </h1>{" "}
          </Tab>
          <Tab>
            <h1 className="md:text-3xl text-base"> Thriller </h1>{" "}
          </Tab>
          <Tab>
            {" "}
            <h1 className="md:text-3xl text-base">History</h1>{" "}
          </Tab>
          <Tab>
            {" "}
            <h1 className="md:text-3xl text-base"> School </h1>
          </Tab>
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
