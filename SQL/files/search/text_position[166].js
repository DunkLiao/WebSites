positionForPages[165]={"page":166,"positions":[{"w":"MySQL","p":[0.143729,0.098025,0.192859,0.098025,0.192859,0.082384,0.143729,0.082384,0.013533,0.008899,0.008739,0.011377,0.006583]},{"w":"The key here is the GROUP","p":[0.143438,0.124117,0.381050,0.124117,0.381050,0.108752,0.143438,0.108752,0.012646,0.011521,0.008083,0.006451,0.010813,0.008104,0.009542,0.006535,0.011521,0.008771,0.007813,0.008083,0.006826,0.005771,0.006792,0.006514,0.006375,0.011521,0.008083,0.007076,0.014750,0.013083,0.015333,0.015479,0.010125]},{"w":"_CONCAT function, which allows you to not only con\u2010","p":[0.381821,0.124117,0.855974,0.124117,0.855974,0.108752,0.381821,0.108752,0.011333,0.013854,0.015062,0.015979,0.013354,0.013188,0.012271,0.006722,0.006208,0.011063,0.011583,0.008375,0.006667,0.005688,0.010458,0.011708,0.003833,0.006347,0.014458,0.011417,0.005708,0.008396,0.010750,0.006972,0.008646,0.005271,0.005729,0.010042,0.014938,0.006792,0.006181,0.010312,0.010458,0.010458,0.006514,0.006771,0.009854,0.006764,0.011562,0.010208,0.006000,0.006931,0.010458,0.011104,0.004979,0.009542,0.006951,0.008792,0.010458,0.011979,0.005062]},{"w":"catenate the characters that make up each name but also order them:","p":[0.143641,0.142895,0.712620,0.142895,0.712620,0.127800,0.143641,0.127800,0.008833,0.008292,0.006771,0.008688,0.011604,0.008292,0.006771,0.008083,0.005083,0.006375,0.011521,0.008083,0.005521,0.008396,0.011562,0.009021,0.007854,0.009125,0.008375,0.006771,0.008771,0.007896,0.006792,0.005083,0.006375,0.011563,0.008292,0.006000,0.005292,0.017312,0.008625,0.010812,0.008083,0.005333,0.010812,0.010563,0.005500,0.008896,0.009125,0.008396,0.010750,0.005333,0.011604,0.008896,0.017271,0.008083,0.004875,0.011042,0.010812,0.006000,0.005542,0.008646,0.005813,0.007562,0.009854,0.005500,0.010542,0.007833,0.010979,0.008771,0.007042,0.005083,0.006375,0.011521,0.008646,0.017729,0.002333]},{"w":"1 select ename, group","p":[0.177852,0.168188,0.352996,0.168188,0.352996,0.157202,0.177852,0.157202,0.007168,0.009546,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009107,0.008955,0.008213,0.008146,0.008416,0.010271,0.005920,0.009107,0.009563,0.007303,0.008905,0.008483,0.006560]},{"w":"_concat(c order by c separator '')","p":[0.353805,0.168188,0.638454,0.168188,0.638454,0.157035,0.353805,0.157035,0.009124,0.008281,0.008955,0.008061,0.008584,0.008517,0.009276,0.007353,0.007606,0.009107,0.009563,0.007303,0.008433,0.009563,0.006628,0.009630,0.007842,0.007825,0.009259,0.007606,0.009546,0.007994,0.008955,0.008213,0.009259,0.007606,0.008517,0.008045,0.009563,0.006628,0.011907,0.008433,0.006864,0.004604]},{"w":"2 ","p":[0.177548,0.181462,0.193452,0.181462,0.193452,0.173328,0.177548,0.173328,0.007471,0.008433]},{"w":"from (","p":[0.211380,0.183595,0.258990,0.183595,0.258990,0.172454,0.211380,0.172454,0.009175,0.007303,0.008449,0.007741,0.010338,0.004604]},{"w":"3 select ename, substr(a.ename,iter.pos,1) c","p":[0.177582,0.199014,0.546793,0.199014,0.546793,0.187874,0.177582,0.187874,0.007437,0.009546,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009107,0.008955,0.008213,0.008146,0.008416,0.010271,0.005920,0.009546,0.008466,0.008483,0.008348,0.008382,0.009175,0.008534,0.007505,0.010439,0.006122,0.008955,0.008213,0.008146,0.008416,0.010271,0.006830,0.008584,0.008045,0.009563,0.009613,0.006645,0.007910,0.008871,0.009832,0.007185,0.009073,0.006527,0.009259,0.006780]},{"w":"4 ","p":[0.177194,0.212301,0.193452,0.212301,0.193452,0.204347,0.177194,0.204347,0.007825,0.008433]},{"w":"from emp a,","p":[0.211380,0.214408,0.300562,0.214408,0.300562,0.203396,0.211380,0.203396,0.009175,0.007303,0.008449,0.007741,0.009107,0.008449,0.008939,0.007235,0.009411,0.009967,0.003407]},{"w":"5 ","p":[0.177700,0.227875,0.193452,0.227875,0.193452,0.219766,0.177700,0.219766,0.007319,0.008433]},{"w":"( select id pos from t10 ) iter","p":[0.254386,0.229853,0.512843,0.229853,0.512843,0.218713,0.254386,0.218713,0.006527,0.009546,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009343,0.008196,0.007758,0.009630,0.007910,0.008871,0.007319,0.009495,0.009175,0.007303,0.008449,0.007741,0.009495,0.008635,0.007943,0.007657,0.010338,0.006527,0.009343,0.008584,0.008045,0.009563,0.005582]},{"w":"6 ","p":[0.177498,0.243294,0.193452,0.243294,0.193452,0.235147,0.177498,0.235147,0.007522,0.008433]},{"w":"where iter.pos <= length(a.ename)","p":[0.202205,0.245286,0.478236,0.245286,0.478236,0.234132,0.202205,0.234132,0.009310,0.007910,0.009563,0.007303,0.007758,0.009343,0.008584,0.008045,0.009563,0.009613,0.006645,0.007910,0.008871,0.007319,0.009259,0.008382,0.007657,0.009343,0.008196,0.008955,0.007910,0.008820,0.008567,0.009141,0.007505,0.010439,0.006122,0.008955,0.008213,0.008146,0.008416,0.009664,0.004604]},{"w":"7 ","p":[0.177650,0.258559,0.193452,0.258559,0.193452,0.250605,0.177650,0.250605,0.007370,0.008433]},{"w":") x","p":[0.254386,0.260692,0.277306,0.260692,0.277306,0.249552,0.254386,0.249552,0.006527,0.008922,0.007471]},{"w":"8 ","p":[0.177447,0.274133,0.193452,0.274133,0.193452,0.265845,0.177447,0.265845,0.007572,0.008433]},{"w":"group by ename","p":[0.202559,0.276125,0.319182,0.276125,0.319182,0.265074,0.202559,0.265074,0.009563,0.007303,0.008905,0.008483,0.007235,0.009630,0.007842,0.007825,0.009107,0.008955,0.008213,0.008146,0.008416,0.006999]},{"w":"Oracle","p":[0.143490,0.309832,0.189248,0.309832,0.189248,0.297617,0.143490,0.297617,0.011055,0.005734,0.009266,0.007615,0.004381,0.007707]},{"w":"The function SYS","p":[0.143432,0.335683,0.287765,0.335683,0.287765,0.324159,0.143432,0.324159,0.012646,0.011521,0.008083,0.005292,0.006208,0.011063,0.011583,0.008375,0.006667,0.005688,0.010458,0.010792,0.005604,0.008938,0.013167,0.008250]},{"w":"_CONNECT_BY_PATH allows you to iteratively build a list:","p":[0.288515,0.339525,0.793099,0.339525,0.793099,0.324159,0.288515,0.324159,0.011333,0.013854,0.015062,0.015479,0.015667,0.012146,0.013521,0.012271,0.011167,0.011812,0.012896,0.011250,0.009542,0.013187,0.013062,0.015167,0.005542,0.008646,0.005271,0.005729,0.010042,0.014938,0.006792,0.004750,0.010313,0.010458,0.010458,0.005083,0.006771,0.009854,0.005396,0.005271,0.006771,0.008771,0.007854,0.008292,0.006667,0.004896,0.010437,0.008396,0.004979,0.009542,0.004875,0.011042,0.011125,0.005229,0.005750,0.010208,0.005542,0.008333,0.005042,0.005625,0.005771,0.007146,0.007229,0.002333]},{"w":" 1 select old","p":[0.176586,0.362531,0.285012,0.362531,0.285012,0.353497,0.176586,0.353497,0.009697,0.007168,0.009546,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009107,0.008669,0.008196,0.006561]},{"w":"_name, new_name","p":[0.286344,0.364509,0.411938,0.364509,0.411938,0.356299,0.286344,0.356299,0.009495,0.008213,0.008146,0.008416,0.010271,0.005920,0.009630,0.007910,0.008078,0.008247,0.009495,0.008213,0.008146,0.008416,0.006999]},{"w":" 2 ","p":[0.176586,0.377822,0.201884,0.377822,0.201884,0.369688,0.176586,0.369688,0.009394,0.007471,0.008433]},{"w":"from (","p":[0.219811,0.379955,0.267421,0.379955,0.267421,0.368814,0.219811,0.368814,0.009175,0.007303,0.008449,0.007741,0.010338,0.004604]},{"w":" 3 select old","p":[0.176586,0.393395,0.285012,0.393395,0.285012,0.384336,0.176586,0.384336,0.009428,0.007437,0.009546,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009107,0.008669,0.008196,0.006561]},{"w":"_name, replace(sys_connect_by_path(c,' '),' ') new_name","p":[0.286344,0.395387,0.749240,0.395387,0.749240,0.384234,0.286344,0.384234,0.009495,0.008213,0.008146,0.008416,0.010271,0.005920,0.010237,0.007303,0.008955,0.008146,0.008500,0.008281,0.008281,0.009664,0.007640,0.007927,0.008939,0.007454,0.009124,0.008281,0.008955,0.008433,0.007910,0.008584,0.008669,0.007505,0.009495,0.007842,0.007960,0.009495,0.008213,0.008517,0.008567,0.009141,0.007353,0.010119,0.009394,0.004958,0.011907,0.006864,0.009040,0.009394,0.004958,0.011907,0.006864,0.006527,0.009630,0.007910,0.008078,0.008247,0.009495,0.008213,0.008146,0.008416,0.006999]},{"w":" 4 ","p":[0.176586,0.408661,0.201884,0.408661,0.201884,0.400707,0.176586,0.400707,0.009040,0.007825,0.008433]},{"w":"from (","p":[0.219811,0.410794,0.267421,0.410794,0.267421,0.399653,0.219811,0.399653,0.009175,0.007303,0.008449,0.007741,0.010338,0.004604]},{"w":" 5 select e.ename old","p":[0.176586,0.424234,0.352472,0.424234,0.352472,0.415175,0.176586,0.415175,0.009546,0.007319,0.009546,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009107,0.010743,0.006122,0.008955,0.008213,0.008146,0.008416,0.007758,0.009107,0.008669,0.008196,0.006561]},{"w":"_name,","p":[0.353804,0.426187,0.401752,0.426187,0.401752,0.417977,0.353804,0.417977,0.009495,0.008213,0.008146,0.008416,0.010271,0.003407]},{"w":" 6 ","p":[0.176586,0.439654,0.201884,0.439654,0.201884,0.431507,0.176586,0.431507,0.009343,0.007522,0.008433]},{"w":"row","p":[0.262716,0.439628,0.285888,0.439628,0.285888,0.433396,0.262716,0.433396,0.007303,0.008078,0.007792]},{"w":"_number() over(partition by e.ename","p":[0.286344,0.441645,0.580589,0.441645,0.580589,0.430492,0.286344,0.430492,0.009495,0.008382,0.007977,0.008939,0.007910,0.009563,0.008534,0.008433,0.006527,0.009107,0.008264,0.008601,0.009563,0.008534,0.007724,0.008213,0.009259,0.007690,0.008281,0.008584,0.008281,0.008196,0.008955,0.007235,0.009630,0.007842,0.007825,0.009107,0.010743,0.006122,0.008955,0.008213,0.008146,0.008416,0.006999]},{"w":" 7 ","p":[0.176586,0.454919,0.201884,0.454919,0.201884,0.446965,0.176586,0.446965,0.009495,0.007370,0.008433]},{"w":"order by substr(e.ename,iter.pos,1)) rn,","p":[0.404939,0.457065,0.739053,0.457065,0.739053,0.445911,0.404939,0.445911,0.009563,0.007303,0.008433,0.009563,0.006628,0.009630,0.007842,0.007825,0.009546,0.008466,0.008483,0.008348,0.008382,0.009175,0.008534,0.007201,0.010743,0.006122,0.008955,0.008213,0.008146,0.008416,0.010271,0.006830,0.008584,0.008045,0.009563,0.009613,0.006645,0.007910,0.008871,0.009832,0.007185,0.009073,0.008433,0.006527,0.010237,0.007825,0.009748,0.003407]},{"w":" 8 ","p":[0.176586,0.470493,0.201884,0.470493,0.201884,0.462205,0.176586,0.462205,0.009293,0.007572,0.008433]},{"w":"substr(e.ename,iter.pos,1) c","p":[0.262024,0.472472,0.496196,0.472472,0.496196,0.461331,0.262024,0.461331,0.008466,0.008483,0.008348,0.008382,0.009175,0.008534,0.007201,0.010743,0.006122,0.008955,0.008213,0.008146,0.008416,0.010271,0.006830,0.008584,0.008045,0.009563,0.009613,0.006645,0.007910,0.008871,0.009832,0.007185,0.009073,0.006527,0.009259,0.006780]},{"w":" 9 ","p":[0.176586,0.485771,0.201884,0.485771,0.201884,0.477624,0.176586,0.477624,0.009293,0.007572,0.008433]},{"w":"from emp e,","p":[0.219811,0.487865,0.308994,0.487865,0.308994,0.476853,0.219811,0.476853,0.009175,0.007303,0.008449,0.007741,0.009107,0.008449,0.008939,0.007235,0.009107,0.010271,0.003407]},{"w":"10 ","p":[0.177851,0.501332,0.201884,0.501332,0.201884,0.493044,0.177851,0.493044,0.007943,0.007657,0.008433]},{"w":"( select rownum pos from emp ) iter","p":[0.262817,0.503311,0.555005,0.503311,0.555005,0.492170,0.262817,0.492170,0.006527,0.009546,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.010237,0.007303,0.008078,0.009310,0.008382,0.007977,0.007741,0.009630,0.007910,0.008871,0.007319,0.009495,0.009175,0.007303,0.008449,0.007741,0.009107,0.008449,0.008939,0.007235,0.010338,0.006527,0.009343,0.008584,0.008045,0.009563,0.005582]},{"w":"11 ","p":[0.177851,0.516597,0.201884,0.516597,0.201884,0.508643,0.177851,0.508643,0.008433,0.007168,0.008433]},{"w":"where iter.pos <= length(e.ename)","p":[0.210637,0.518743,0.486667,0.518743,0.486667,0.507590,0.210637,0.507590,0.009310,0.007910,0.009563,0.007303,0.007758,0.009343,0.008584,0.008045,0.009563,0.009613,0.006645,0.007910,0.008871,0.007319,0.009259,0.008382,0.007657,0.009343,0.008196,0.008955,0.007910,0.008820,0.008567,0.009141,0.007201,0.010743,0.006122,0.008955,0.008213,0.008146,0.008416,0.009664,0.004604]},{"w":"12 ","p":[0.177851,0.532017,0.201884,0.532017,0.201884,0.523883,0.177851,0.523883,0.008129,0.007471,0.008433]},{"w":"order by 1","p":[0.210991,0.534163,0.293596,0.534163,0.293596,0.523112,0.210991,0.523112,0.009563,0.007303,0.008433,0.009563,0.006628,0.009630,0.007842,0.007825,0.009697,0.006122]},{"w":"13 ","p":[0.177851,0.547590,0.201884,0.547590,0.201884,0.539302,0.177851,0.539302,0.008163,0.007437,0.008433]},{"w":") x","p":[0.271250,0.549569,0.294169,0.549569,0.294169,0.538429,0.271250,0.538429,0.006527,0.008922,0.007471]},{"w":"14 ","p":[0.177851,0.562856,0.201884,0.562856,0.201884,0.554902,0.177851,0.554902,0.007775,0.007825,0.008433]},{"w":"start with rn = 1","p":[0.211429,0.562984,0.352624,0.562984,0.352624,0.553951,0.211429,0.553951,0.008382,0.008348,0.009259,0.007690,0.007370,0.008753,0.009023,0.008584,0.008567,0.007235,0.010237,0.007825,0.007235,0.009208,0.007657,0.009697,0.006122]},{"w":"15 connect by prior rn = rn-1 and prior old","p":[0.177851,0.580421,0.537988,0.580421,0.537988,0.569370,0.177851,0.569370,0.008281,0.007319,0.009259,0.008281,0.008955,0.008433,0.007910,0.008584,0.008669,0.007370,0.009630,0.007842,0.007825,0.009630,0.009040,0.007539,0.008196,0.009563,0.006628,0.010237,0.007825,0.007235,0.009208,0.007657,0.010237,0.007825,0.009596,0.007336,0.007168,0.009411,0.008652,0.007910,0.007758,0.009630,0.009040,0.007539,0.008196,0.009563,0.006628,0.009107,0.008669,0.008196,0.006561]},{"w":"_name = old_name","p":[0.539320,0.580383,0.673347,0.580383,0.673347,0.569370,0.539320,0.569370,0.009495,0.008213,0.008146,0.008416,0.007758,0.009208,0.007657,0.009107,0.008669,0.008196,0.007893,0.009495,0.008213,0.008146,0.008416,0.006999]},{"w":"16 ","p":[0.177851,0.593849,0.201884,0.593849,0.201884,0.585702,0.177851,0.585702,0.008078,0.007522,0.008433]},{"w":")","p":[0.271250,0.595828,0.275854,0.595828,0.275854,0.584687,0.271250,0.584687,0.004604]},{"w":"17 ","p":[0.177851,0.609114,0.201884,0.609114,0.201884,0.601160,0.177851,0.601160,0.008230,0.007370,0.008433]},{"w":"where length(old","p":[0.210637,0.611260,0.344039,0.611260,0.344039,0.600107,0.210637,0.600107,0.009310,0.007910,0.009563,0.007303,0.007758,0.009343,0.008196,0.008955,0.007910,0.008820,0.008567,0.009141,0.007201,0.008669,0.008196,0.006561]},{"w":"_name) = length(new_name)","p":[0.345372,0.611260,0.554128,0.611260,0.554128,0.600107,0.345372,0.600107,0.009495,0.008213,0.008146,0.008416,0.009664,0.006527,0.009208,0.007657,0.009343,0.008196,0.008955,0.007910,0.008820,0.008567,0.009141,0.007724,0.007910,0.008078,0.008247,0.009495,0.008213,0.008146,0.008416,0.009664,0.004604]},{"w":"PostgreSQL","p":[0.144202,0.648323,0.228104,0.648323,0.228104,0.632927,0.144202,0.632927,0.009220,0.009175,0.006881,0.006996,0.010069,0.005918,0.008945,0.008739,0.011377,0.006583]},{"w":"PostgreSQL has now added STRING","p":[0.143684,0.674660,0.448267,0.674660,0.448267,0.659295,0.143684,0.659295,0.011000,0.010708,0.007146,0.006604,0.009833,0.007813,0.008958,0.009917,0.015354,0.010458,0.005104,0.011562,0.009187,0.006792,0.005333,0.011563,0.010042,0.014083,0.005542,0.009125,0.011000,0.010979,0.008875,0.010208,0.005604,0.009583,0.013042,0.012958,0.006729,0.015979,0.013500]},{"w":"_AGG to order characters within a string.","p":[0.448746,0.674660,0.794871,0.674660,0.794871,0.659295,0.448746,0.659295,0.010833,0.014312,0.014896,0.013979,0.005083,0.006771,0.009854,0.005500,0.010542,0.007833,0.010979,0.008771,0.007042,0.005521,0.008396,0.011563,0.009021,0.007854,0.009125,0.008375,0.006771,0.008771,0.007896,0.006792,0.004917,0.014750,0.005271,0.006375,0.011417,0.005521,0.010792,0.005542,0.008333,0.005583,0.007146,0.006688,0.007708,0.005521,0.011396,0.010354,0.002333]},{"w":" ","p":[0.176591,0.697538,0.185024,0.697538,0.185024,0.697525,0.176591,0.697525,0.008433]},{"w":"select ename, string","p":[0.253597,0.699683,0.419938,0.699683,0.419938,0.688697,0.253597,0.688697,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009107,0.008955,0.008213,0.008146,0.008416,0.010271,0.005920,0.009546,0.008382,0.009175,0.007539,0.008719,0.007910,0.006561]},{"w":"_agg(c , ''","p":[0.421270,0.699683,0.510402,0.699683,0.510402,0.688530,0.421270,0.688530,0.009276,0.008129,0.008433,0.009664,0.007353,0.007606,0.010945,0.005920,0.011907,0.008433,0.001467]},{"w":" ","p":[0.176591,0.712957,0.185024,0.712957,0.185024,0.712944,0.176591,0.712944,0.008433]},{"w":"ORDER BY c)","p":[0.463787,0.715090,0.554133,0.715090,0.554133,0.703950,0.463787,0.703950,0.008871,0.008416,0.009057,0.007825,0.007505,0.009343,0.007741,0.008213,0.009259,0.009512,0.004604]},{"w":"from (","p":[0.177654,0.730510,0.225264,0.730510,0.225264,0.719369,0.177654,0.719369,0.009175,0.007303,0.008449,0.007741,0.010338,0.004604]},{"w":" ","p":[0.176591,0.743796,0.185024,0.743796,0.185024,0.743783,0.176591,0.743783,0.008433]},{"w":"select a.ename,","p":[0.253597,0.745634,0.376459,0.745634,0.376459,0.734956,0.253597,0.734956,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009411,0.010439,0.006122,0.008955,0.008213,0.008146,0.008416,0.010271,0.003407]},{"w":" ","p":[0.176591,0.759216,0.185024,0.759216,0.185024,0.759203,0.176591,0.759203,0.008433]},{"w":"substr(a.ename,iter.pos,1) as c","p":[0.312625,0.761349,0.572094,0.761349,0.572094,0.750208,0.312625,0.750208,0.008466,0.008483,0.008348,0.008382,0.009175,0.008534,0.007505,0.010439,0.006122,0.008955,0.008213,0.008146,0.008416,0.010271,0.006830,0.008584,0.008045,0.009563,0.009613,0.006645,0.007910,0.008871,0.009832,0.007185,0.009073,0.006527,0.009411,0.008567,0.007319,0.009259,0.006780]},{"w":" ","p":[0.176591,0.774635,0.185024,0.774635,0.185024,0.774622,0.176591,0.774622,0.008433]},{"w":"from emp a,","p":[0.270412,0.776742,0.359594,0.776742,0.359594,0.765730,0.270412,0.765730,0.009175,0.007303,0.008449,0.007741,0.009107,0.008449,0.008939,0.007235,0.009411,0.009967,0.003407]},{"w":" ","p":[0.176591,0.790055,0.185024,0.790055,0.185024,0.790042,0.176591,0.790042,0.008433]},{"w":"(select id as pos from t10) iter","p":[0.313418,0.792188,0.580308,0.792188,0.580308,0.781047,0.313418,0.781047,0.007640,0.007994,0.008669,0.008196,0.008584,0.008669,0.007370,0.009343,0.008196,0.007758,0.009411,0.008567,0.007319,0.009630,0.007910,0.008871,0.007319,0.009495,0.009175,0.007303,0.008449,0.007741,0.009495,0.008635,0.007943,0.009562,0.006527,0.009343,0.008584,0.008045,0.009563,0.005582]},{"w":" ","p":[0.176591,0.805474,0.185024,0.805474,0.185024,0.805461,0.176591,0.805461,0.008433]},{"w":"where iter.pos <= length(a.ename)","p":[0.261237,0.807620,0.537268,0.807620,0.537268,0.796467,0.261237,0.796467,0.009310,0.007910,0.009563,0.007303,0.007758,0.009343,0.008584,0.008045,0.009563,0.009613,0.006645,0.007910,0.008871,0.007319,0.009259,0.008382,0.007657,0.009343,0.008196,0.008955,0.007910,0.008820,0.008567,0.009141,0.007505,0.010439,0.006122,0.008955,0.008213,0.008146,0.008416,0.009664,0.004604]},{"w":" ","p":[0.176591,0.820894,0.185024,0.820894,0.185024,0.820881,0.176591,0.820881,0.008433]},{"w":"order by 1,2","p":[0.261591,0.823040,0.361180,0.823040,0.361180,0.811989,0.261591,0.811989,0.009563,0.007303,0.008433,0.009563,0.006628,0.009630,0.007842,0.007825,0.009697,0.009681,0.006881,0.006544]},{"w":" ","p":[0.176591,0.836313,0.185024,0.836313,0.185024,0.836300,0.176591,0.836300,0.008433]},{"w":") x","p":[0.313418,0.838446,0.336337,0.838446,0.336337,0.827306,0.313418,0.827306,0.006527,0.008922,0.007471]},{"w":" ","p":[0.176591,0.851733,0.185024,0.851733,0.185024,0.851720,0.176591,0.851720,0.008433]},{"w":"Group By c","p":[0.312288,0.853879,0.395011,0.853879,0.395011,0.843599,0.312288,0.843599,0.009461,0.007303,0.008905,0.008483,0.007235,0.009343,0.008129,0.007825,0.009259,0.006780]},{"w":"6.12 Alphabetizing a String ","p":[0.636766,0.938082,0.798641,0.938082,0.798641,0.925959,0.636766,0.925959,0.007696,0.003929,0.006839,0.006786,0.003071,0.008625,0.003679,0.007661,0.007268,0.007482,0.007321,0.006714,0.005679,0.003179,0.006446,0.003679,0.007500,0.007036,0.003214,0.006679,0.003286,0.006518,0.005696,0.004857,0.003679,0.007500,0.007036,0.002821]},{"w":"| ","p":[0.814820,0.938762,0.820248,0.938762,0.820248,0.925170,0.814820,0.925170,0.002607,0.002821]},{"w":"143","p":[0.836230,0.935469,0.856123,0.935469,0.856123,0.926422,0.836230,0.926422,0.006589,0.007500,0.005804]}]};