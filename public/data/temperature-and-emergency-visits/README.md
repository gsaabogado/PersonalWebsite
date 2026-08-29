# Point estimates behind the figures

Sarmiento, L., F. P. Colelli and F. Pavanello.
"Emergency department visits and temperature: Evidence from Mexico."
*Journal of Economic Behavior & Organization* 250 (2026), 107728.
doi:10.1016/j.jebo.2026.107728

These CSVs contain the estimates plotted on the site and nothing more.
For the full data and the code that produced them, see the replication
package: <https://github.com/FPavanello/tmp_er_admissions> and the data
archive at <https://doi.org/10.5281/zenodo.21873500>.

## Columns

| Column | Meaning |
|---|---|
| `bin` | temperature interval; 20-25 C is the omitted reference |
| `horizon` | 0 = same day; 30 = cumulative over 30 days |
| `estimate`, `se` | Poisson coefficient and clustered standard error, as printed in the paper |
| `pct` | percent effect = 100 x estimate (the abstract's convention) |
| `ci_low`, `ci_high` | 95% confidence interval, in percent |
| `stars` | *** p<0.01, ** p<0.05, * p<0.1 |

## Files

- `m1_curve.csv`
- `m1_lagpath.csv`
- `m2_mortality.csv`
- `m3_age.csv`
- `m3_sex.csv`
- `m4_chapters.csv`
- `m5_population.csv`
- `m5_projections_by_age.csv`
- `m5_projections_range.csv`
- `m5_projections_severity.csv`
- `m6_fixed_effects.csv`
- `m6_outcome.csv`
- `m6_weather_source.csv`
