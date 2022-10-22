import { GetServerSideProps } from "next";
import { Key } from "react";
import { IService } from "../../@shared/interfaces/_service_interface";
import SingleService from "./SingleService";

const MyServices = ({ services }: any) => {
  return (
    <div className="mx-5 md:mx-16 text py-14">
      <h2 className="text-3xl font-bold inline-block border-b-2 mb-10">
        What I Do
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {services.map((service: IService, index: Key | null | undefined) => (
          <SingleService key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default MyServices;
