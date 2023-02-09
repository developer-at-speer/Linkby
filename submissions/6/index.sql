WITH campaigns_within_six_months AS (
        SELECT
            account_id,
            date_trunc('month', created_at) AS month,
            count(*) AS num_clicks
        FROM
            campaigns
        WHERE
            created_at >= NOW() - INTERVAL '6 months'
            AND (end_date - start_date) >= INTERVAL '7 days'
        GROUP BY
            account_id,
            date_trunc('month', created_at)
    ), all_clicks AS (
        SELECT
            account_id,
            campaign_id,
            date_trunc('month', created_at) AS month,
            count(*) AS num_clicks
        FROM
            clicks
        GROUP BY
            account_id,
            campaign_id,
            date_trunc('month', created_at)
    )
SELECT
    accounts.id AS account_id,
    accounts.name AS account_name,
    campaigns_within_six_months.month AS month,
    sum(all_clicks.num_clicks) AS num_clicks
FROM
    accounts
    JOIN campaigns_within_six_months
    ON accounts.id = campaigns_within_six_months.account_id
    JOIN all_clicks
    ON accounts.id = all_clicks.account_id
WHERE
    accounts.active = TRUE
GROUP BY
    accounts.id,
    accounts.name,
    campaigns_within_six_months.month
ORDER BY
    accounts.id,
    campaigns_within_six_months.month;
