const sql = `
WITH data_values(campaignId, views, metadata) AS (
  VALUES ${data.map((d, i) => `($1, $2, $3)`).join(', ')}
),
upsert AS (
  UPDATE public.campaign_stats
  SET views = views + data_values.views,
      metadata = jsonb_set(public.campaign_stats.metadata, '{overrideDate}', to_jsonb(data_values.metadata->>'overrideDate')) ||
                 jsonb_set(public.campaign_stats.metadata, '{incrementInteger}', 
                     to_jsonb(public.campaign_stats.metadata->>'incrementInteger'::integer + 
                     data_values.metadata->>'incrementInteger'::integer)::jsonb)
  FROM data_values
  WHERE public.campaign_stats.campaignId = data_values.campaignId
  RETURNING public.campaign_stats.*
)
INSERT INTO public.campaign_stats (campaignId, views, metadata)
SELECT campaignId, views, metadata
FROM data_values
WHERE NOT EXISTS (
  SELECT 1
  FROM upsert
  WHERE upsert.campaignId = data_values.campaignId
)
`;
