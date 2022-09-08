import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { limitString } from "../../../../utils";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Heading from "../../../Generic/Heading";
import Badge from "../../../Generic/Badge";
import { Skeleton } from "@mui/material";

const ApiCardHeader = ({ data, loading }) => {
  const navigate = useNavigate();

  const headerInfoBadges = (
    <>
      <Badge
        type="secondary"
        startIcon={
          data?.Auth ? (
            <LockOutlinedIcon fontSize="small" className="!text-gray-600" />
          ) : (
            <LockOpenIcon fontSize="small" className="!text-gray-600" />
          )
        }
        className="mr-1.5"
      >
        {data?.Auth && data?.Auth}
      </Badge>
      {data?.Cors === "yes" && (
        <Badge type="secondary" className="mr-1.5">
          Cors
        </Badge>
      )}
      {data?.HTTPS && (
        <Badge type="secondary" className="mr-1.5">
          HTTPS
        </Badge>
      )}
    </>
  );

  return (
    <div className="header max-w-full">
      <div className="header-main flex justify-between items-center">
        {!loading ? (
          <Heading
            type="secondary"
            className="cursor-pointer text-primary"
            onClick={() => {
              navigate({
                pathname: data?.Slug,
                search: `?${createSearchParams({ _id: data?._id })}`,
              });
            }}
          >
            {limitString(data?.API, 20, true)}
          </Heading>
        ) : (
          <Skeleton width={100} height={35} />
        )}

        <div className="flex-1 flex items-center justify-end">
          {loading ? (
            <div className="flex">
              <span className="mr-1.5">
                <Skeleton width={80} height={45} />
              </span>
              <span>
                <Skeleton width={80} height={45} />
              </span>
            </div>
          ) : (
            <div className="flex">{headerInfoBadges}</div>
          )}
        </div>
      </div>

      <div className="header-layer-2 mt-2 flex items-center justify-start">
        {!loading ? (
          <span className="">{data?.Category}</span>
        ) : (
          <Skeleton height={30} width="40%" />
        )}
      </div>
    </div>
  );
};

export default ApiCardHeader;
