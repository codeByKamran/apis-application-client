import Text from "../../../Generic/Text";
import PropTypes from "prop-types";
import Link from "../../../Generic/Link";
import { Skeleton } from "@mui/material";
import ApiCardHeader from "./ApiCardHeader";

const APICard = ({ data, loading }) => {
  return (
    <div className="card-primary flex flex-col content-card api-card px-4 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-150 shadow border border-gray-100 min-h-[190px]">
      <ApiCardHeader data={data} loading={loading} />
      <div className="mt-4">
        {!loading ? (
          <Text>{data?.Description}</Text>
        ) : (
          <div className="flex flex-col">
            <Skeleton height={25} width="87%" />
            <Skeleton height={25} width="60%" />
          </div>
        )}
      </div>
      <div className="mt-auto">
        {!loading ? (
          <Link
            href={data?.Link}
            target="_blank"
            rel="noopener noreferrer"
            italic
          >
            {data?.Link}
          </Link>
        ) : (
          <Skeleton width="70%" height={25} />
        )}
      </div>
    </div>
  );
};

APICard.propTypes = {
  data: PropTypes.object,
};

export default APICard;
