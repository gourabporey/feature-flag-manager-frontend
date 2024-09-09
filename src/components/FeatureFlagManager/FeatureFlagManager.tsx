import React, { useEffect, useState } from "react";
import Api from "../../api/Api";
import {
  Button,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface FeatureFlag {
  id: string;
  name: string;
  description?: string;
  isEnabled: boolean;
  createdAt: Date;
  lastUpdatedAt: Date;
}

interface FeatureFlagListProps {
  featureFlags: FeatureFlag[];
}

const FeatureFlagList: React.FC<FeatureFlagListProps> = ({
  featureFlags,
}: FeatureFlagListProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Feature Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Enabled</TableCell>
            <TableCell>Created at</TableCell>
            <TableCell>Last updated at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {featureFlags.map((featureFlag: FeatureFlag) => (
            <TableRow key={featureFlag.id}>
              <TableCell>{featureFlag.name}</TableCell>
              <TableCell>{featureFlag.description}</TableCell>
              <TableCell>{featureFlag.isEnabled.toString()}</TableCell>
              <TableCell>{featureFlag.createdAt.toString()}</TableCell>
              <TableCell>{featureFlag.lastUpdatedAt.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const FeatureFlagManager: React.FC = () => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlag[]>([]);
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const fetchFeatureFlags = async () => {
      const response = await Api.get("/api/feature-flags");
      setFeatureFlags(response);
    };
    fetchFeatureFlags();
  }, []);

  const redirectToAddToggle = () => {
    navigate("/new-feature-flag");
  };

  return (
    <>
      <Stack>
        <Container>
          <Button
            variant="contained"
            color="success"
            onClick={redirectToAddToggle}>
            Add new flag
          </Button>
        </Container>
        <Container>
          <FeatureFlagList featureFlags={featureFlags} />
        </Container>
      </Stack>
    </>
  );
};

export default FeatureFlagManager;
