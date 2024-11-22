positionForPages[166]={"page":167,"positions":[{"w":"SQL Server","p":[0.143453,0.096050,0.221942,0.096050,0.221942,0.082384,0.143453,0.082384,0.008739,0.011377,0.006996,0.004220,0.008785,0.009381,0.005413,0.009083,0.009381,0.005115]},{"w":"If you are using SQL Server 2017 or beyond, the PostgreSQL solution with","p":[0.143640,0.124117,0.856697,0.124117,0.856697,0.108752,0.143640,0.108752,0.006875,0.005604,0.012748,0.010313,0.010458,0.010458,0.013539,0.009021,0.007813,0.008083,0.013331,0.011312,0.007458,0.005521,0.011396,0.009146,0.013602,0.009917,0.015354,0.010458,0.013602,0.009771,0.008771,0.007625,0.010437,0.008771,0.007042,0.013373,0.010083,0.011542,0.008708,0.009021,0.013498,0.010542,0.007042,0.012873,0.011208,0.008104,0.010313,0.010458,0.011583,0.011125,0.003833,0.013081,0.006375,0.011521,0.008083,0.013560,0.011000,0.010708,0.007146,0.006604,0.009833,0.007813,0.008958,0.009917,0.015354,0.010458,0.013581,0.007562,0.010167,0.005563,0.010812,0.006667,0.005687,0.010458,0.010792,0.012915,0.014750,0.005271,0.006375,0.010313]},{"w":"STRING","p":[0.143738,0.139323,0.215530,0.139323,0.215530,0.128387,0.143738,0.128387,0.009583,0.013042,0.012958,0.006729,0.015979,0.013500]},{"w":"_AGG will work. Otherwise, to alphabetize rows of strings, it is necessary to","p":[0.216009,0.143165,0.856378,0.143165,0.856378,0.127800,0.216009,0.127800,0.010833,0.014313,0.014896,0.013979,0.005671,0.014750,0.005229,0.005271,0.004958,0.005671,0.014854,0.010542,0.007333,0.011250,0.003542,0.006401,0.015000,0.006375,0.011521,0.008771,0.007833,0.014750,0.005771,0.007563,0.009000,0.003833,0.005838,0.006771,0.009854,0.006296,0.008646,0.005312,0.010937,0.011562,0.008479,0.011208,0.008437,0.006667,0.005562,0.008875,0.008083,0.006171,0.007813,0.010042,0.014938,0.006792,0.006255,0.010417,0.005604,0.006338,0.007146,0.006687,0.007708,0.005521,0.011396,0.010000,0.007708,0.003833,0.006151,0.005271,0.006000,0.006151,0.005771,0.006792,0.006088,0.011563,0.008875,0.008792,0.008938,0.007646,0.007604,0.009021,0.007667,0.009542,0.005838,0.006771,0.009083]},{"w":"walk each string and then order their characters:","p":[0.143045,0.162212,0.545149,0.162212,0.545149,0.146847,0.143045,0.146847,0.014896,0.008646,0.005250,0.010042,0.005500,0.008896,0.009125,0.008396,0.010750,0.005583,0.007146,0.006687,0.007708,0.005521,0.011396,0.009146,0.005542,0.008937,0.011583,0.010208,0.005083,0.006375,0.011521,0.008687,0.010792,0.005500,0.010542,0.007833,0.010979,0.008771,0.007042,0.005083,0.006375,0.011521,0.008750,0.005604,0.007042,0.005521,0.008396,0.011562,0.009021,0.007854,0.009125,0.008375,0.006771,0.008771,0.007896,0.008021,0.002333]},{"w":" 1 select ename,","p":[0.176587,0.186927,0.308994,0.186927,0.308994,0.176249,0.176587,0.176249,0.009697,0.007168,0.009546,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009107,0.008955,0.008213,0.008146,0.008416,0.010271,0.003407]},{"w":" 2 ","p":[0.176587,0.200509,0.201884,0.200509,0.201884,0.192376,0.176587,0.192376,0.009394,0.007471,0.008433]},{"w":"max(case when pos=1 then c else '' end)+","p":[0.286901,0.202642,0.622752,0.202642,0.622752,0.191502,0.286901,0.191502,0.008719,0.007943,0.009849,0.007353,0.008584,0.008567,0.007994,0.007758,0.008753,0.009309,0.007910,0.008955,0.007235,0.009630,0.007910,0.008871,0.008095,0.008922,0.007168,0.009495,0.008567,0.007910,0.008955,0.007235,0.009259,0.007606,0.009107,0.008669,0.008635,0.007994,0.007758,0.011907,0.008433,0.004958,0.009107,0.008955,0.007910,0.009664,0.007303,0.006898]},{"w":" 3 ","p":[0.176587,0.216083,0.201884,0.216083,0.201884,0.207795,0.176587,0.207795,0.009428,0.007437,0.008433]},{"w":"max(case when pos=2 then c else '' end)+","p":[0.286901,0.218062,0.622752,0.218062,0.622752,0.206921,0.286901,0.206921,0.008719,0.007943,0.009849,0.007353,0.008584,0.008567,0.007994,0.007758,0.008753,0.009310,0.007910,0.008955,0.007235,0.009630,0.007910,0.008871,0.008095,0.008618,0.007471,0.009495,0.008567,0.007910,0.008955,0.007235,0.009259,0.007606,0.009107,0.008669,0.008635,0.007994,0.007758,0.011907,0.008433,0.004958,0.009107,0.008955,0.007910,0.009664,0.007303,0.006898]},{"w":" 4 ","p":[0.176587,0.231348,0.201884,0.231348,0.201884,0.223395,0.176587,0.223395,0.009040,0.007825,0.008433]},{"w":"max(case when pos=3 then c else '' end)+","p":[0.286901,0.233481,0.622752,0.233481,0.622752,0.222341,0.286901,0.222341,0.008719,0.007943,0.009849,0.007353,0.008584,0.008567,0.007994,0.007758,0.008753,0.009310,0.007910,0.008955,0.007235,0.009630,0.007910,0.008871,0.008095,0.008652,0.007438,0.009495,0.008567,0.007910,0.008955,0.007235,0.009259,0.007606,0.009107,0.008669,0.008635,0.007994,0.007758,0.011907,0.008433,0.004958,0.009107,0.008955,0.007910,0.009664,0.007303,0.006898]},{"w":" 5 ","p":[0.176587,0.246922,0.201884,0.246922,0.201884,0.238814,0.176587,0.238814,0.009546,0.007319,0.008433]},{"w":"max(case when pos=4 then c else '' end)+","p":[0.286901,0.248901,0.622752,0.248901,0.622752,0.237760,0.286901,0.237760,0.008719,0.007943,0.009849,0.007353,0.008584,0.008567,0.007994,0.007758,0.008753,0.009310,0.007910,0.008955,0.007235,0.009630,0.007910,0.008871,0.008095,0.008264,0.007825,0.009495,0.008567,0.007910,0.008955,0.007235,0.009259,0.007606,0.009107,0.008669,0.008635,0.007994,0.007758,0.011907,0.008433,0.004958,0.009107,0.008955,0.007910,0.009664,0.007303,0.006898]},{"w":" 6 ","p":[0.176587,0.262342,0.201884,0.262342,0.201884,0.254195,0.176587,0.254195,0.009343,0.007522,0.008433]},{"w":"max(case when pos=5 then c else '' end)+","p":[0.286901,0.264320,0.622752,0.264320,0.622752,0.253180,0.286901,0.253180,0.008719,0.007943,0.009849,0.007353,0.008584,0.008567,0.007994,0.007758,0.008753,0.009310,0.007910,0.008955,0.007235,0.009630,0.007910,0.008871,0.008095,0.008770,0.007319,0.009495,0.008567,0.007910,0.008955,0.007235,0.009259,0.007606,0.009107,0.008669,0.008635,0.007994,0.007758,0.011907,0.008433,0.004958,0.009107,0.008955,0.007910,0.009664,0.007303,0.006898]},{"w":" 7 ","p":[0.176587,0.277607,0.201884,0.277607,0.201884,0.269653,0.176587,0.269653,0.009495,0.007370,0.008433]},{"w":"max(case when pos=6 then c else '' end)","p":[0.286901,0.279740,0.613156,0.279740,0.613156,0.268599,0.286901,0.268599,0.008719,0.007943,0.009849,0.007353,0.008584,0.008567,0.007994,0.007758,0.008753,0.009310,0.007910,0.008955,0.007235,0.009630,0.007910,0.008871,0.008095,0.008567,0.007522,0.009495,0.008567,0.007910,0.008955,0.007235,0.009259,0.007606,0.009107,0.008669,0.008635,0.007994,0.007758,0.011907,0.008433,0.004958,0.009107,0.008955,0.007910,0.009664,0.004604]},{"w":" 8 ","p":[0.176587,0.293181,0.201884,0.293181,0.201884,0.284893,0.176587,0.284893,0.009293,0.007572,0.008433]},{"w":"from (","p":[0.245110,0.295159,0.292720,0.295159,0.292720,0.284019,0.245110,0.284019,0.009175,0.007303,0.008449,0.007741,0.010338,0.004604]},{"w":" 9 ","p":[0.176587,0.308459,0.201884,0.308459,0.201884,0.300312,0.176587,0.300312,0.009293,0.007572,0.008433]},{"w":"select e.ename,","p":[0.228295,0.310283,0.351157,0.310283,0.351157,0.299605,0.228295,0.299605,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009107,0.010743,0.006122,0.008955,0.008213,0.008146,0.008416,0.010271,0.003407]},{"w":"10 ","p":[0.177852,0.324020,0.201884,0.324020,0.201884,0.315732,0.177852,0.315732,0.007943,0.007657,0.008433]},{"w":"substring(e.ename,iter.pos,1) as c,","p":[0.270458,0.326011,0.561971,0.326011,0.561971,0.314858,0.270458,0.314858,0.008466,0.008483,0.008348,0.008382,0.009175,0.007539,0.008719,0.007910,0.009664,0.007201,0.010743,0.006122,0.008955,0.008213,0.008146,0.008416,0.010271,0.006830,0.008584,0.008045,0.009563,0.009613,0.006645,0.007910,0.008871,0.009832,0.007185,0.009073,0.006527,0.009411,0.008568,0.007319,0.009259,0.010119,0.003407]},{"w":"11 ","p":[0.177852,0.339285,0.201884,0.339285,0.201884,0.331331,0.177852,0.331331,0.008433,0.007168,0.008433]},{"w":"row","p":[0.271149,0.339413,0.294322,0.339413,0.294322,0.333181,0.271149,0.333181,0.007303,0.008078,0.007792]},{"w":"_number() over (","p":[0.294777,0.341418,0.427640,0.341418,0.427640,0.330277,0.294777,0.330277,0.009495,0.008382,0.007977,0.008938,0.007910,0.009563,0.008534,0.008433,0.006527,0.009107,0.008264,0.008601,0.009563,0.006628,0.010338,0.004604]},{"w":"12 ","p":[0.177852,0.354704,0.201884,0.354704,0.201884,0.346571,0.177852,0.346571,0.008129,0.007471,0.008433]},{"w":"partition by e.ename","p":[0.278975,0.356850,0.445669,0.356850,0.445669,0.345800,0.278975,0.345800,0.008213,0.009259,0.007690,0.008281,0.008584,0.008281,0.008196,0.008955,0.007235,0.009630,0.007842,0.007825,0.009107,0.010743,0.006122,0.008955,0.008213,0.008146,0.008416,0.006999]},{"w":"13 ","p":[0.177852,0.370278,0.201884,0.370278,0.201884,0.361990,0.177852,0.361990,0.008163,0.007437,0.008433]},{"w":"order by substring(e.ename,iter.pos,1)) as pos","p":[0.312182,0.372270,0.698291,0.372270,0.698291,0.361116,0.312182,0.361116,0.009562,0.007303,0.008433,0.009562,0.006628,0.009630,0.007842,0.007825,0.009546,0.008466,0.008483,0.008348,0.008382,0.009175,0.007539,0.008719,0.007910,0.009664,0.007201,0.010743,0.006122,0.008955,0.008213,0.008146,0.008416,0.010271,0.006830,0.008584,0.008045,0.009562,0.009613,0.006645,0.007910,0.008871,0.009832,0.007185,0.009073,0.008433,0.006527,0.009411,0.008568,0.007319,0.009630,0.007910,0.008871,0.006206]},{"w":"14 ","p":[0.177852,0.385543,0.201884,0.385543,0.201884,0.377589,0.177852,0.377589,0.007775,0.007825,0.008433]},{"w":"from emp e,","p":[0.228245,0.387651,0.317427,0.387651,0.317427,0.376639,0.228245,0.376639,0.009175,0.007303,0.008449,0.007741,0.009107,0.008449,0.008939,0.007235,0.009107,0.010271,0.003407]},{"w":"15 ","p":[0.177852,0.401117,0.201884,0.401117,0.201884,0.393009,0.177852,0.393009,0.008281,0.007319,0.008433]},{"w":"(select row","p":[0.271250,0.403096,0.361782,0.403096,0.361782,0.391955,0.271250,0.391955,0.007640,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.010237,0.007303,0.008078,0.007792]},{"w":"_number()over(order by ename) as pos","p":[0.362238,0.403109,0.664561,0.403109,0.664561,0.391955,0.362238,0.391955,0.009495,0.008382,0.007977,0.008939,0.007910,0.009563,0.008534,0.008433,0.007201,0.008264,0.008601,0.009563,0.008534,0.007201,0.009563,0.007303,0.008433,0.009563,0.006628,0.009630,0.007842,0.007825,0.009107,0.008955,0.008213,0.008146,0.008416,0.009664,0.006527,0.009411,0.008567,0.007319,0.009630,0.007910,0.008871,0.006206]},{"w":"16 ","p":[0.177852,0.416537,0.201884,0.416537,0.201884,0.408390,0.177852,0.408390,0.008078,0.007522,0.008433]},{"w":"from emp) iter","p":[0.295705,0.418515,0.411652,0.418515,0.411652,0.407375,0.295705,0.407375,0.009175,0.007303,0.008449,0.007741,0.009107,0.008449,0.008939,0.009141,0.006527,0.009343,0.008584,0.008045,0.009563,0.005582]},{"w":"17 ","p":[0.177852,0.431802,0.201884,0.431802,0.201884,0.423848,0.177852,0.423848,0.008230,0.007370,0.008433]},{"w":"where iter.pos <= len(e.ename)","p":[0.219070,0.433935,0.469803,0.433935,0.469803,0.422794,0.219070,0.422794,0.009310,0.007910,0.009563,0.007303,0.007758,0.009343,0.008584,0.008045,0.009563,0.009613,0.006645,0.007910,0.008871,0.007319,0.009259,0.008382,0.007657,0.009343,0.008196,0.008955,0.009141,0.007201,0.010743,0.006122,0.008955,0.008213,0.008146,0.008416,0.009664,0.004604]},{"w":"18 ","p":[0.177852,0.447376,0.201884,0.447376,0.201884,0.439088,0.177852,0.439088,0.008028,0.007572,0.008433]},{"w":") x","p":[0.279683,0.449354,0.302603,0.449354,0.302603,0.438214,0.279683,0.438214,0.006527,0.008922,0.007471]},{"w":"19 ","p":[0.177852,0.462654,0.201884,0.462654,0.201884,0.454507,0.177852,0.454507,0.008028,0.007572,0.008433]},{"w":"group by ename","p":[0.219424,0.464787,0.336046,0.464787,0.336046,0.453736,0.219424,0.453736,0.009563,0.007303,0.008905,0.008483,0.007235,0.009630,0.007842,0.007825,0.009107,0.008955,0.008213,0.008146,0.008416,0.006999]},{"w":"Discussion","p":[0.144718,0.501441,0.247379,0.501441,0.247379,0.485134,0.144718,0.485134,0.014237,0.005663,0.009950,0.010326,0.012547,0.009637,0.010388,0.005976,0.013298,0.010638]},{"w":"SQL Server","p":[0.143450,0.540647,0.221939,0.540647,0.221939,0.526981,0.143450,0.526981,0.008739,0.011377,0.006996,0.004220,0.008785,0.009381,0.005413,0.009083,0.009381,0.005115]},{"w":"The inline view X returns each character in each name as a row. The function","p":[0.143450,0.564825,0.856652,0.564825,0.856652,0.553349,0.143450,0.553349,0.012646,0.011521,0.008083,0.010494,0.005521,0.011104,0.005625,0.005521,0.011562,0.008083,0.009806,0.010333,0.005687,0.008271,0.014083,0.009973,0.013479,0.010514,0.007813,0.008438,0.006604,0.011146,0.007646,0.011646,0.006792,0.010598,0.008896,0.009125,0.008396,0.010750,0.010619,0.008396,0.011562,0.009021,0.007854,0.009125,0.008375,0.006771,0.008771,0.007042,0.010494,0.005521,0.010792,0.010598,0.008896,0.009125,0.008396,0.010750,0.010431,0.011604,0.008896,0.017271,0.008083,0.010639,0.009188,0.006792,0.010639,0.008333,0.010515,0.007813,0.010042,0.013771,0.003542,0.010410,0.012646,0.011521,0.008083,0.010389,0.006208,0.011063,0.011583,0.008375,0.006667,0.005687,0.010458,0.010292]},{"w":"SUBSTR or SUBSTRING extracts each character from each name, and the function","p":[0.143735,0.585540,0.856646,0.585540,0.856646,0.572397,0.143735,0.572397,0.009312,0.015396,0.012375,0.009583,0.013042,0.012167,0.007369,0.010542,0.007042,0.007473,0.009312,0.015396,0.012375,0.009583,0.013042,0.012958,0.006729,0.015979,0.013979,0.007369,0.008167,0.010104,0.006687,0.007854,0.009125,0.008375,0.006854,0.006792,0.007369,0.008896,0.009125,0.008396,0.010750,0.007390,0.008396,0.011563,0.009021,0.007854,0.009125,0.008375,0.006771,0.008771,0.007042,0.007160,0.006292,0.007813,0.010417,0.016500,0.007369,0.008896,0.009125,0.008396,0.010750,0.007202,0.011604,0.008896,0.017271,0.009000,0.003833,0.007410,0.008938,0.011583,0.010208,0.006952,0.006375,0.011521,0.008083,0.007160,0.006208,0.011063,0.011583,0.008375,0.006667,0.005687,0.010458,0.010292]},{"w":"ROW","p":[0.143625,0.602968,0.190917,0.602968,0.190917,0.592190,0.143625,0.592190,0.013083,0.014625,0.019583]},{"w":"_NUMBER ranks each character alphabetically:","p":[0.191229,0.606809,0.588104,0.606809,0.588104,0.591444,0.191229,0.591444,0.010833,0.015750,0.015187,0.018771,0.012104,0.012000,0.012167,0.005417,0.007854,0.008937,0.011083,0.010896,0.006792,0.005500,0.008896,0.009125,0.008396,0.010750,0.005521,0.008396,0.011562,0.009021,0.007854,0.009125,0.008375,0.006771,0.008771,0.007042,0.005542,0.008646,0.005312,0.010938,0.011562,0.008479,0.011208,0.008437,0.006667,0.005708,0.008833,0.008646,0.005271,0.004979,0.011417,0.002333]},{"w":"ENAME ","p":[0.178121,0.629687,0.227182,0.629687,0.227182,0.621733,0.178121,0.621733,0.007825,0.007657,0.008820,0.009428,0.006898,0.008433]},{"w":"C ","p":[0.236390,0.629841,0.252479,0.629841,0.252479,0.621553,0.236390,0.621553,0.007657,0.008433]},{"w":"POS","p":[0.262143,0.629841,0.285282,0.629841,0.285282,0.621553,0.262143,0.621553,0.007690,0.008871,0.006577]},{"w":"-","p":[0.178948,0.642344,0.182658,0.642344,0.182658,0.641342,0.178948,0.641342,0.003710]},{"w":"-","p":[0.187380,0.642344,0.191091,0.642344,0.191091,0.641342,0.187380,0.641342,0.003710]},{"w":"-","p":[0.195813,0.642344,0.199523,0.642344,0.199523,0.641342,0.195813,0.641342,0.003710]},{"w":"-","p":[0.204245,0.642344,0.207956,0.642344,0.207956,0.641342,0.204245,0.641342,0.003710]},{"w":"-","p":[0.212678,0.642344,0.216388,0.642344,0.216388,0.641342,0.212678,0.641342,0.003710]},{"w":" ","p":[0.218749,0.645107,0.227182,0.645107,0.227182,0.645094,0.218749,0.645094,0.008433]},{"w":"-","p":[0.237975,0.642344,0.241686,0.642344,0.241686,0.641342,0.237975,0.641342,0.003710]},{"w":" ","p":[0.244047,0.645107,0.252479,0.645107,0.252479,0.645094,0.244047,0.645094,0.008433]},{"w":"-","p":[0.263273,0.642344,0.266983,0.642344,0.266983,0.641342,0.263273,0.641342,0.003710]},{"w":"-","p":[0.271706,0.642344,0.275416,0.642344,0.275416,0.641342,0.271706,0.641342,0.003710]},{"w":"-","p":[0.280138,0.642344,0.283848,0.642344,0.283848,0.641342,0.280138,0.641342,0.003710]},{"w":"ADAMS ","p":[0.176738,0.660680,0.227182,0.660680,0.227182,0.652392,0.176738,0.652392,0.009191,0.007674,0.008820,0.008820,0.007505,0.008433]},{"w":"A ","p":[0.235766,0.660526,0.252479,0.660526,0.252479,0.652572,0.235766,0.652572,0.008281,0.008433]},{"w":"1","p":[0.262177,0.660526,0.268299,0.660526,0.268299,0.652572,0.262177,0.652572,0.006122]},{"w":"ADAMS ","p":[0.176738,0.676100,0.227182,0.676100,0.227182,0.667812,0.176738,0.667812,0.009191,0.007674,0.008820,0.008820,0.007505,0.008433]},{"w":"A ","p":[0.235766,0.675946,0.252479,0.675946,0.252479,0.667992,0.235766,0.667992,0.008281,0.008433]},{"w":"2","p":[0.261873,0.675946,0.268417,0.675946,0.268417,0.667812,0.261873,0.667812,0.006544]},{"w":"ADAMS ","p":[0.176738,0.691519,0.227182,0.691519,0.227182,0.683231,0.176738,0.683231,0.009191,0.007674,0.008820,0.008820,0.007505,0.008433]},{"w":"D ","p":[0.236525,0.691417,0.252479,0.691417,0.252479,0.683334,0.236525,0.683334,0.007522,0.008433]},{"w":"3","p":[0.261907,0.691519,0.268366,0.691519,0.268366,0.683231,0.261907,0.683231,0.006459]},{"w":"ADAMS ","p":[0.176738,0.706939,0.227182,0.706939,0.227182,0.698651,0.176738,0.698651,0.009191,0.007674,0.008820,0.008820,0.007505,0.008433]},{"w":"M ","p":[0.236154,0.706785,0.252479,0.706785,0.252479,0.698831,0.236154,0.698831,0.007893,0.008433]},{"w":"4","p":[0.261519,0.706785,0.268771,0.706785,0.268771,0.698831,0.261519,0.698831,0.007252]},{"w":"ADAMS ","p":[0.176738,0.722358,0.227182,0.722358,0.227182,0.714070,0.176738,0.714070,0.009191,0.007674,0.008820,0.008820,0.007505,0.008433]},{"w":"S ","p":[0.236542,0.722358,0.252479,0.722358,0.252479,0.714070,0.236542,0.714070,0.007505,0.008433]},{"w":"5","p":[0.262025,0.722358,0.268366,0.722358,0.268366,0.714250,0.262025,0.714250,0.006341]},{"w":"\u2026","p":[0.177109,0.737765,0.184496,0.737765,0.184496,0.736390,0.177109,0.736390,0.007387]},{"w":"To return each letter of a string as a row, you must walk the string. This is accom\u2010","p":[0.143436,0.767354,0.855972,0.767354,0.855972,0.751989,0.143436,0.751989,0.011000,0.009854,0.007648,0.007813,0.008437,0.006604,0.011146,0.007646,0.010792,0.007731,0.008896,0.009125,0.008396,0.010750,0.007273,0.005729,0.008438,0.006354,0.006771,0.008771,0.007042,0.007731,0.010417,0.005604,0.007773,0.008333,0.007815,0.007146,0.006687,0.007708,0.005521,0.011396,0.009146,0.007773,0.009187,0.006792,0.007773,0.008333,0.007648,0.007813,0.010042,0.013479,0.003833,0.006981,0.010313,0.010458,0.010458,0.007523,0.016708,0.011313,0.007146,0.006000,0.007148,0.014896,0.008646,0.005250,0.010042,0.007315,0.006375,0.011521,0.008083,0.007815,0.007146,0.006688,0.007708,0.005521,0.011396,0.010354,0.003542,0.007544,0.012646,0.011417,0.005771,0.006792,0.007627,0.005771,0.006792,0.007773,0.009125,0.008812,0.008792,0.010417,0.017687,0.005062]},{"w":"plished with inline view ITER.","p":[0.143221,0.786132,0.394221,0.786132,0.394221,0.771036,0.143221,0.771036,0.010875,0.005625,0.005771,0.007167,0.011521,0.008875,0.010208,0.004917,0.014750,0.005271,0.006375,0.010750,0.005396,0.005521,0.011104,0.005625,0.005521,0.011562,0.008083,0.004708,0.010333,0.005688,0.008271,0.014083,0.005521,0.006896,0.012875,0.012000,0.013375,0.002333]},{"w":"Now that the letters in each name have been alphabetized, the last step is to put those","p":[0.143284,0.814250,0.856632,0.814250,0.856632,0.799154,0.143284,0.799154,0.015312,0.010042,0.014083,0.005541,0.006375,0.011562,0.008292,0.006000,0.005541,0.006375,0.011521,0.008083,0.005500,0.005729,0.008438,0.006354,0.006771,0.008771,0.007896,0.006792,0.005854,0.005521,0.010792,0.005958,0.008896,0.009125,0.008396,0.010750,0.005791,0.011604,0.008896,0.017271,0.008083,0.005562,0.011562,0.007938,0.010437,0.008083,0.005333,0.011208,0.008854,0.008687,0.010792,0.006000,0.008646,0.005312,0.010937,0.011563,0.008479,0.011208,0.008438,0.006667,0.005562,0.008875,0.008875,0.011125,0.003833,0.005541,0.006375,0.011521,0.008083,0.005500,0.005771,0.009188,0.007146,0.006000,0.006041,0.007146,0.006771,0.008438,0.010563,0.005854,0.005771,0.006792,0.005541,0.006771,0.009854,0.005541,0.011167,0.010812,0.006000,0.005541,0.006375,0.011521,0.010708,0.007562,0.007563]},{"w":"letters back together, into a string, in the order they are ranked. Each letter\u2019s position","p":[0.143174,0.833567,0.856647,0.833567,0.856647,0.818202,0.143174,0.818202,0.005729,0.008438,0.006354,0.006771,0.008771,0.007896,0.006792,0.005709,0.011250,0.009125,0.008312,0.010042,0.005918,0.006771,0.010458,0.009917,0.008438,0.006375,0.011521,0.008771,0.006646,0.003833,0.006230,0.005521,0.010750,0.006771,0.009854,0.006376,0.008333,0.006418,0.007146,0.006687,0.007708,0.005521,0.011396,0.010063,0.003833,0.006230,0.005521,0.010792,0.005918,0.006375,0.011521,0.008083,0.006334,0.010542,0.007833,0.010979,0.008771,0.007042,0.005918,0.006375,0.011521,0.008104,0.009542,0.006376,0.009021,0.007813,0.008083,0.006251,0.007854,0.008937,0.011083,0.010813,0.008875,0.011417,0.003542,0.006168,0.012042,0.009125,0.008396,0.010750,0.005876,0.005729,0.008438,0.006354,0.006771,0.008771,0.007917,0.002646,0.006792,0.005918,0.011333,0.010708,0.007458,0.005271,0.006667,0.005687,0.010458,0.010292]},{"w":"is evaluated by the CASE statements (lines 2\u20137). If a character is found at a particular","p":[0.143522,0.852615,0.856954,0.852615,0.856954,0.837250,0.143522,0.837250,0.005771,0.006792,0.006001,0.008062,0.010479,0.008646,0.005562,0.011271,0.008292,0.006771,0.008875,0.010208,0.005376,0.010458,0.009542,0.005584,0.006375,0.011521,0.008083,0.006147,0.013354,0.014854,0.009604,0.011229,0.006084,0.007146,0.006813,0.008292,0.006771,0.008646,0.017271,0.008687,0.010750,0.006854,0.006792,0.006688,0.006062,0.005625,0.005521,0.011562,0.008937,0.006792,0.005876,0.010396,0.010771,0.009958,0.007479,0.003542,0.006022,0.006875,0.005604,0.006043,0.008333,0.006022,0.008396,0.011563,0.009021,0.007854,0.009125,0.008375,0.006771,0.008771,0.007042,0.005897,0.005771,0.006792,0.005793,0.006375,0.010458,0.011063,0.011583,0.010208,0.006043,0.008292,0.006000,0.006043,0.008333,0.005584,0.011375,0.009021,0.007396,0.006667,0.005708,0.008625,0.010771,0.005771,0.009021,0.006854]},{"w":"position, it is then concatenated to the result of the next evaluation (the following","p":[0.143204,0.871662,0.857135,0.871662,0.857135,0.856297,0.143204,0.856297,0.011333,0.010708,0.007458,0.005271,0.006667,0.005687,0.010458,0.011708,0.003833,0.008280,0.005271,0.006000,0.008280,0.005771,0.006792,0.007968,0.006375,0.011521,0.008688,0.010792,0.008405,0.008792,0.010458,0.011583,0.008833,0.008292,0.006771,0.008688,0.011604,0.008292,0.006771,0.008875,0.010208,0.007967,0.006771,0.009854,0.007967,0.006375,0.011521,0.008083,0.008301,0.007813,0.008937,0.007396,0.010771,0.005312,0.006000,0.008384,0.010417,0.005604,0.007967,0.006375,0.011521,0.008083,0.008217,0.011563,0.008167,0.010104,0.006000,0.008384,0.008063,0.010479,0.008646,0.005562,0.011271,0.008292,0.006667,0.005687,0.010458,0.010792,0.009072,0.006104,0.006375,0.011521,0.008083,0.008176,0.006375,0.010167,0.005271,0.005729,0.010042,0.014750,0.005521,0.011396,0.009146]},{"w":"CASE statement). Because the aggregate function MAX is used as well, only one","p":[0.143781,0.890710,0.856629,0.890710,0.856629,0.875345,0.143781,0.875345,0.013354,0.014854,0.009604,0.011229,0.009730,0.007146,0.006812,0.008292,0.006771,0.008646,0.017271,0.008688,0.010750,0.006937,0.007479,0.003542,0.009626,0.012688,0.008875,0.008833,0.008542,0.011313,0.007562,0.008083,0.009230,0.006375,0.011521,0.008083,0.009689,0.008937,0.009750,0.009833,0.007813,0.008688,0.009958,0.008292,0.006771,0.008083,0.009439,0.006208,0.011063,0.011583,0.008375,0.006667,0.005687,0.010458,0.010792,0.009418,0.018438,0.014125,0.013479,0.009543,0.005771,0.006792,0.009480,0.011313,0.007562,0.008875,0.010208,0.009689,0.009188,0.006792,0.009064,0.014854,0.008396,0.005271,0.005875,0.003833,0.009647,0.010458,0.011104,0.004979,0.009542,0.009647,0.010458,0.011562,0.007563]},{"w":"144 ","p":[0.143811,0.935374,0.167543,0.935374,0.167543,0.926531,0.143811,0.926531,0.006589,0.007286,0.007036,0.002821]},{"w":"| ","p":[0.183722,0.938762,0.189150,0.938762,0.189150,0.925170,0.183722,0.925170,0.002607,0.002821]},{"w":"Chapter 6: Working with Strings","p":[0.204686,0.938082,0.390900,0.938082,0.390900,0.925959,0.204686,0.925959,0.007250,0.007268,0.007482,0.007000,0.005429,0.007304,0.004071,0.003286,0.007732,0.002946,0.003107,0.012179,0.007589,0.004946,0.006804,0.003679,0.007500,0.007036,0.002964,0.011250,0.003089,0.005768,0.006875,0.003286,0.006518,0.005696,0.004857,0.003679,0.007500,0.007393,0.004732]}]};