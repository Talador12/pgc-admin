import React from "react";
import { Row, Col, Icon, Statistic, Typography } from "antd";

const StatColumn = ({ testId, title, statistic }) => {
  return (<Col span={6} data-testid={`${testId}Col`}>
    {statistic != null ? (
      <Statistic
        title={
          <Typography.Text data-testid={`${testId}Text`}>
            {title}
          </Typography.Text>
        }
        value={statistic}
        data-testid={`${testId}Statistic`}
      />
    ) : (
        <Icon
          type="loading"
          style={{ fontSize: 28 }}
          data-testid="Stat Row Spin"
          spin
        />
      )}
  </Col>
  );
};

const statRow = ({ statistics }) => {
  const stats = statistics || {};
  const {
    totalCallers,
    totalCalls,
    recentDayCount,
    totalRecentCalls,
    completionRate,
  } = stats;
  return (<Row data-testid="statistics">
    <StatColumn
      testId="totalCallers"
      title="Total Callers"
      statistic={totalCallers}
    />
    <StatColumn
      testId="totalCalls"
      title="Total Calls"
      statistic={totalCalls}
    />
    <StatColumn
      testId="dayCounter"
      title={`Past ${recentDayCount} Days Call Count`}
      statistic={totalRecentCalls}
    />
    <StatColumn
      testId="completionRate"
      title="Completion Rate"
      statistic={completionRate != null ? `${completionRate} %` : "Und."}
    />
  </Row>
  );
};

export default statRow;