positionForPages[311]={"page":312,"positions":[{"w":"2005 ","p":[0.177549,0.093737,0.218750,0.093737,0.218750,0.085449,0.177549,0.085449,0.008247,0.008433,0.008770,0.007319,0.008433]},{"w":"9","p":[0.261773,0.093596,0.268451,0.093596,0.268451,0.085449,0.261773,0.085449,0.006679]},{"w":"2005 ","p":[0.177549,0.109156,0.218750,0.109156,0.218750,0.100868,0.177549,0.100868,0.008247,0.008433,0.008770,0.007319,0.008433]},{"w":"12","p":[0.253745,0.109002,0.268418,0.109002,0.268418,0.100868,0.253745,0.100868,0.008129,0.006544]},{"w":"At this point you have the year and end month for each quarter. Use those values to","p":[0.143283,0.138732,0.856381,0.138732,0.856381,0.123367,0.143283,0.123367,0.013479,0.006000,0.006455,0.006375,0.011417,0.005771,0.006792,0.006455,0.011333,0.010521,0.005521,0.010750,0.006000,0.006122,0.010312,0.010458,0.010458,0.006476,0.011563,0.007937,0.010437,0.008083,0.006455,0.006375,0.011521,0.008083,0.006122,0.010312,0.008896,0.009021,0.007042,0.006914,0.008938,0.011583,0.010208,0.006872,0.008687,0.011583,0.010208,0.006664,0.017271,0.010458,0.010750,0.006375,0.010750,0.006664,0.006375,0.010542,0.007042,0.006872,0.008896,0.009125,0.008396,0.010750,0.006914,0.010437,0.011271,0.009021,0.007396,0.006771,0.008771,0.006938,0.003542,0.006789,0.014396,0.007562,0.008083,0.006455,0.006375,0.011521,0.010708,0.007562,0.008083,0.006080,0.010479,0.008646,0.005563,0.011229,0.008938,0.006792,0.006455,0.006771,0.009083]},{"w":"construct a date, specifically, the first day of the last month for each quarter. Use the","p":[0.143652,0.157780,0.856625,0.157780,0.856625,0.142415,0.143652,0.142415,0.008792,0.010458,0.011646,0.007146,0.006688,0.007646,0.011250,0.008375,0.006000,0.006843,0.008333,0.006822,0.011021,0.008292,0.006771,0.009000,0.003833,0.006884,0.007146,0.011333,0.008875,0.008688,0.005479,0.006271,0.005708,0.008833,0.008646,0.005271,0.004979,0.008937,0.003833,0.006384,0.006375,0.011521,0.008083,0.006593,0.006271,0.005604,0.007896,0.007146,0.006000,0.006822,0.011021,0.007979,0.009542,0.006801,0.010417,0.005604,0.006384,0.006375,0.011521,0.008083,0.006343,0.005771,0.009187,0.007146,0.006000,0.006593,0.017271,0.010458,0.010750,0.006375,0.010750,0.006593,0.006375,0.010542,0.007042,0.006801,0.008896,0.009125,0.008396,0.010750,0.006843,0.010438,0.011271,0.009021,0.007396,0.006771,0.008771,0.006938,0.003542,0.006718,0.014396,0.007562,0.008083,0.006384,0.006375,0.011521,0.007563]},{"w":"concatenation operator || to glue together the year and month, and then use the ","p":[0.143646,0.176828,0.853639,0.176828,0.853639,0.160859,0.143646,0.160859,0.008792,0.010458,0.011583,0.008833,0.008292,0.006771,0.008688,0.011604,0.008292,0.006667,0.005688,0.010458,0.010792,0.009001,0.010208,0.011333,0.008771,0.007854,0.008292,0.006771,0.010542,0.007042,0.010293,0.005479,0.003417,0.008584,0.006771,0.009854,0.008834,0.009458,0.005562,0.011229,0.008083,0.008584,0.006771,0.010458,0.009917,0.008437,0.006375,0.011521,0.008771,0.007042,0.008584,0.006375,0.011521,0.008083,0.008251,0.010313,0.008896,0.009021,0.007042,0.009043,0.008938,0.011583,0.010208,0.008793,0.017271,0.010458,0.010750,0.006375,0.011667,0.003833,0.009043,0.008938,0.011583,0.010208,0.008584,0.006375,0.011521,0.008688,0.010792,0.008834,0.011313,0.007562,0.008083,0.008584,0.006375,0.011521,0.008083,0.004729]},{"w":"DATE function to convert to a date:","p":[0.143536,0.191986,0.439453,0.191986,0.439453,0.180510,0.143536,0.180510,0.014292,0.013187,0.012875,0.011229,0.005292,0.006208,0.011063,0.011583,0.008375,0.006667,0.005688,0.010458,0.010792,0.005083,0.006771,0.009854,0.005521,0.008792,0.010458,0.010292,0.010437,0.008771,0.007396,0.006000,0.005083,0.006771,0.009854,0.005542,0.008333,0.005521,0.011021,0.008292,0.006771,0.009312,0.002333]},{"w":"select date(substr(cast(yrq as char(4)),1,4) ||'-'||","p":[0.177494,0.220924,0.611922,0.220924,0.611922,0.209630,0.177494,0.209630,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.008905,0.008702,0.008298,0.008348,0.009495,0.007758,0.008517,0.008483,0.008298,0.008129,0.009326,0.008517,0.007589,0.008433,0.008601,0.008129,0.009411,0.007185,0.009596,0.007454,0.007910,0.009175,0.008601,0.007522,0.009175,0.008753,0.008112,0.009191,0.008517,0.007303,0.009411,0.008433,0.009124,0.007117,0.009748,0.006763,0.009411,0.006999,0.011620,0.008433,0.008382,0.007201,0.009664,0.008483,0.008433,0.002091]},{"w":" ","p":[0.176584,0.234172,0.185016,0.234172,0.185016,0.234159,0.176584,0.234159,0.008433]},{"w":"rtrim(cast(mod(yrq,10)*3 as char(2))) ||'-1') q","p":[0.237112,0.236344,0.630895,0.236344,0.630895,0.225049,0.237112,0.225049,0.007539,0.009326,0.007539,0.008314,0.009529,0.007589,0.008433,0.008601,0.008129,0.009411,0.007336,0.008433,0.008416,0.009546,0.007185,0.009596,0.007454,0.010035,0.007117,0.008213,0.009276,0.007775,0.008348,0.007741,0.009175,0.008601,0.007522,0.009175,0.008753,0.008112,0.009191,0.008517,0.007572,0.009141,0.008433,0.008433,0.006999,0.011620,0.008433,0.008382,0.007201,0.007336,0.010760,0.006729,0.006999,0.008955,0.006864]},{"w":"_end","p":[0.632076,0.236280,0.664490,0.236280,0.664490,0.225255,0.632076,0.225255,0.008820,0.008972,0.007842,0.006780]},{"w":" ","p":[0.176584,0.249592,0.185016,0.249592,0.185016,0.249579,0.176584,0.249579,0.008433]},{"w":"from (","p":[0.194056,0.251763,0.242644,0.251763,0.242644,0.240469,0.194056,0.240469,0.009326,0.007421,0.008433,0.007943,0.010018,0.005447]},{"w":"select 20051 yrq from t1 union all","p":[0.177494,0.267157,0.462734,0.267157,0.462734,0.256107,0.177494,0.256107,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008652,0.007623,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.007623,0.009428,0.008500,0.007977,0.008314,0.009006,0.007370,0.009175,0.008298,0.008433,0.007269]},{"w":"select 20052 yrq from t1 union all","p":[0.177494,0.282577,0.462734,0.282577,0.462734,0.271526,0.177494,0.271526,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008567,0.007707,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.007623,0.009428,0.008500,0.007977,0.008314,0.009006,0.007370,0.009175,0.008298,0.008433,0.007269]},{"w":"select 20053 yrq from t1 union all","p":[0.177495,0.297996,0.462734,0.297996,0.462734,0.286946,0.177495,0.286946,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008534,0.007741,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.007623,0.009428,0.008500,0.007977,0.008314,0.009006,0.007370,0.009175,0.008298,0.008433,0.007269]},{"w":"select 20054 yrq from t1","p":[0.177495,0.313416,0.378273,0.313416,0.378273,0.302365,0.177495,0.302365,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008298,0.007977,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.006932]},{"w":" ","p":[0.176584,0.326689,0.185016,0.326689,0.185016,0.326676,0.176584,0.326676,0.008433]},{"w":") x","p":[0.237045,0.328861,0.260589,0.328861,0.260589,0.317566,0.237045,0.317566,0.006999,0.008770,0.007775]},{"w":"Q_END","p":[0.177073,0.359636,0.218072,0.359636,0.218072,0.349407,0.177073,0.349407,0.008078,0.009832,0.007825,0.008416,0.006847]},{"w":"-","p":[0.178945,0.370185,0.182655,0.370185,0.182655,0.369183,0.178945,0.369183,0.003710]},{"w":"-","p":[0.187378,0.370185,0.191088,0.370185,0.191088,0.369183,0.187378,0.369183,0.003710]},{"w":"-","p":[0.195810,0.370185,0.199520,0.370185,0.199520,0.369183,0.195810,0.369183,0.003710]},{"w":"-","p":[0.204243,0.370185,0.207953,0.370185,0.207953,0.369183,0.204243,0.369183,0.003710]},{"w":"-","p":[0.212675,0.370185,0.216385,0.370185,0.216385,0.369183,0.212675,0.369183,0.003710]},{"w":"-","p":[0.221108,0.370185,0.224818,0.370185,0.224818,0.369183,0.221108,0.369183,0.003710]},{"w":"-","p":[0.229540,0.370185,0.233251,0.370185,0.233251,0.369183,0.229540,0.369183,0.003710]},{"w":"-","p":[0.237973,0.370185,0.241683,0.370185,0.241683,0.369183,0.237973,0.369183,0.003710]},{"w":"-","p":[0.246405,0.370185,0.250116,0.370185,0.250116,0.369183,0.246405,0.369183,0.003710]},{"w":"-","p":[0.254838,0.370185,0.258548,0.370185,0.258548,0.369183,0.254838,0.369183,0.003710]},{"w":"-","p":[0.263270,0.370185,0.266981,0.370185,0.266981,0.369183,0.263270,0.369183,0.003710]},{"w":"01-MAR-2005","p":[0.177360,0.388521,0.268364,0.388521,0.268364,0.380234,0.177360,0.380234,0.008922,0.009529,0.006611,0.008045,0.009208,0.009866,0.007033,0.008247,0.008433,0.008770,0.006341]},{"w":"01-JUN-2005","p":[0.177360,0.403941,0.268364,0.403941,0.268364,0.395653,0.177360,0.395653,0.008922,0.009529,0.006982,0.008331,0.008551,0.009866,0.007033,0.008247,0.008433,0.008770,0.006341]},{"w":"01-SEP-2005","p":[0.177360,0.419360,0.268364,0.419360,0.268364,0.411072,0.177360,0.411072,0.008922,0.009529,0.006999,0.009040,0.008129,0.009563,0.007033,0.008247,0.008433,0.008770,0.006341]},{"w":"01-DEC-2005","p":[0.177360,0.434780,0.268364,0.434780,0.268364,0.426492,0.177360,0.426492,0.008922,0.009529,0.006982,0.009057,0.007674,0.010018,0.007033,0.008247,0.008433,0.008770,0.006341]},{"w":"The values for Q","p":[0.143446,0.462816,0.286447,0.462816,0.286447,0.448991,0.143446,0.448991,0.012646,0.011521,0.008083,0.006514,0.010479,0.008646,0.005562,0.011229,0.008938,0.006792,0.007098,0.006375,0.010542,0.007042,0.007452,0.014083]},{"w":"_END are the first day of the last month of each quarter. To get to","p":[0.286968,0.464356,0.856378,0.464356,0.856378,0.448991,0.286968,0.448991,0.011021,0.011646,0.015750,0.014625,0.007348,0.009021,0.007813,0.008083,0.006889,0.006375,0.011521,0.008083,0.007098,0.006271,0.005604,0.007896,0.007146,0.006000,0.007327,0.011021,0.007979,0.009542,0.007306,0.010417,0.005604,0.006889,0.006375,0.011521,0.008083,0.006848,0.005771,0.009187,0.007146,0.006000,0.007098,0.017271,0.010458,0.010750,0.006375,0.010750,0.007306,0.010417,0.005604,0.007306,0.008896,0.009125,0.008396,0.010750,0.007348,0.010438,0.011271,0.009021,0.007396,0.006771,0.008771,0.006938,0.003542,0.007119,0.011000,0.009854,0.007139,0.009917,0.008438,0.006000,0.006889,0.006771,0.009083]},{"w":"the last day of the month, add one month to Q","p":[0.143211,0.483404,0.544022,0.483404,0.544022,0.468038,0.143211,0.468038,0.006375,0.011521,0.008083,0.006600,0.005771,0.009187,0.007146,0.006000,0.007079,0.011021,0.007979,0.009542,0.007058,0.010417,0.005604,0.006642,0.006375,0.011521,0.008083,0.006850,0.017271,0.010458,0.010750,0.006375,0.011667,0.003833,0.007100,0.009125,0.011000,0.010208,0.007058,0.010458,0.011562,0.008083,0.006850,0.017271,0.010458,0.010750,0.006375,0.010750,0.006642,0.006771,0.009854,0.007204,0.014083]},{"w":"_END and then subtract one day. To","p":[0.544543,0.483404,0.856372,0.483404,0.856372,0.468038,0.544543,0.468038,0.011021,0.011646,0.015750,0.014625,0.007100,0.008937,0.011583,0.010208,0.006642,0.006375,0.011521,0.008688,0.010792,0.007142,0.007396,0.010604,0.010792,0.006688,0.007854,0.009125,0.008375,0.006000,0.007058,0.010458,0.011563,0.008083,0.007079,0.011021,0.007979,0.009229,0.003542,0.006871,0.011000,0.009083]},{"w":"find the start date for each quarter, subtract two months from Q","p":[0.143413,0.502213,0.674288,0.502213,0.674288,0.487086,0.143413,0.487086,0.006271,0.005521,0.011583,0.010208,0.005083,0.006375,0.011521,0.008083,0.005583,0.007146,0.006812,0.009021,0.007396,0.006000,0.005521,0.011021,0.008292,0.006771,0.008083,0.005292,0.006375,0.010542,0.007042,0.005500,0.008896,0.009125,0.008396,0.010750,0.005542,0.010437,0.011271,0.009021,0.007396,0.006771,0.008771,0.006646,0.003833,0.005583,0.007396,0.010604,0.010792,0.006687,0.007854,0.009125,0.008375,0.006000,0.005083,0.006187,0.014854,0.009854,0.005292,0.017271,0.010458,0.010750,0.006375,0.011604,0.006792,0.005292,0.006292,0.007813,0.010417,0.016500,0.005646,0.014083]},{"w":"_END.","p":[0.674809,0.500356,0.730559,0.500356,0.730559,0.488070,0.674809,0.488070,0.011021,0.011646,0.015750,0.015000,0.002333]},{"w":"Oracle","p":[0.143492,0.536692,0.189250,0.536692,0.189250,0.524477,0.143492,0.524477,0.011055,0.005734,0.009266,0.007615,0.004381,0.007707]},{"w":"The first step is to find the year and quarter you are working with. Substring out the","p":[0.143434,0.566385,0.856616,0.566385,0.856616,0.551020,0.143434,0.551020,0.012646,0.011521,0.008083,0.006316,0.006271,0.005604,0.007896,0.007146,0.006000,0.006608,0.007146,0.006771,0.008438,0.010563,0.006420,0.005771,0.006792,0.006108,0.006771,0.009854,0.006316,0.006271,0.005521,0.011583,0.010208,0.006108,0.006375,0.011521,0.008083,0.005774,0.010312,0.008896,0.009021,0.007042,0.006566,0.008938,0.011583,0.010208,0.006566,0.010437,0.011271,0.009021,0.007396,0.006771,0.008771,0.007042,0.005774,0.010313,0.010458,0.010458,0.006566,0.009021,0.007813,0.008083,0.005941,0.014854,0.010542,0.007333,0.010708,0.005521,0.011396,0.009146,0.005941,0.014750,0.005271,0.006375,0.011958,0.003542,0.006629,0.009604,0.010604,0.011292,0.007146,0.006687,0.007708,0.005521,0.011396,0.009146,0.006524,0.010458,0.010812,0.006000,0.006108,0.006375,0.011521,0.007563]},{"w":"year from inline view X (X.YRQ) using the SUBSTR function. To get the quarter, use","p":[0.142887,0.585432,0.856631,0.585432,0.856631,0.570067,0.142887,0.570067,0.010313,0.008896,0.009021,0.007042,0.006061,0.006292,0.007813,0.010417,0.016500,0.006165,0.005521,0.011104,0.005625,0.005521,0.011562,0.008083,0.005477,0.010333,0.005688,0.008271,0.014083,0.005644,0.013479,0.006956,0.005896,0.014687,0.003854,0.013667,0.013083,0.015542,0.006271,0.006102,0.011312,0.007458,0.005521,0.011396,0.009146,0.005852,0.006375,0.011521,0.008083,0.006373,0.009313,0.015396,0.012375,0.009583,0.013042,0.012167,0.006061,0.006208,0.011063,0.011583,0.008375,0.006667,0.005687,0.010458,0.012000,0.003542,0.006081,0.011000,0.009854,0.006102,0.009917,0.008438,0.006000,0.005852,0.006375,0.011521,0.008083,0.006311,0.010438,0.011271,0.009021,0.007396,0.006771,0.008771,0.006646,0.003833,0.006102,0.011312,0.007562,0.007563]},{"w":"modulus 10 on YRQ. Once you have the quarter, multiply by three to get the end","p":[0.143422,0.604480,0.856916,0.604480,0.856916,0.589115,0.143422,0.589115,0.017271,0.010646,0.010813,0.010771,0.005563,0.011312,0.006792,0.009879,0.008458,0.009271,0.008379,0.010458,0.010792,0.007920,0.013667,0.013083,0.014979,0.003542,0.008525,0.015250,0.011583,0.008792,0.008083,0.007629,0.010313,0.010458,0.010458,0.007983,0.011562,0.007938,0.010437,0.008083,0.007962,0.006375,0.011521,0.008083,0.008420,0.010437,0.011271,0.009021,0.007396,0.006771,0.008771,0.006646,0.003833,0.008170,0.016708,0.010771,0.005312,0.006667,0.005271,0.010875,0.004979,0.009542,0.007754,0.010458,0.009542,0.007962,0.006375,0.011437,0.007813,0.008854,0.008083,0.007962,0.006771,0.009854,0.008212,0.009917,0.008438,0.006000,0.007962,0.006375,0.011521,0.008083,0.008379,0.008687,0.011583,0.009979]},{"w":"month for the quarter. The results are shown here:","p":[0.143416,0.623289,0.560979,0.623289,0.560979,0.608162,0.143416,0.608162,0.017271,0.010458,0.010750,0.006375,0.010750,0.005292,0.006375,0.010542,0.007042,0.005083,0.006375,0.011521,0.008083,0.005542,0.010437,0.011271,0.009021,0.007396,0.006771,0.008771,0.006938,0.003542,0.005313,0.012646,0.011521,0.008083,0.005417,0.007813,0.008938,0.007396,0.010771,0.005312,0.006854,0.006792,0.005542,0.009021,0.007813,0.008083,0.005583,0.007167,0.011521,0.010042,0.014688,0.010792,0.005104,0.011521,0.008771,0.007813,0.009312,0.002333]},{"w":"select substr(yrq,1,4) yr, mod(yrq,10)*3 mth","p":[0.177491,0.648577,0.546617,0.648577,0.546617,0.637282,0.177491,0.637282,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009343,0.008517,0.008483,0.008298,0.008129,0.009326,0.008517,0.007185,0.009596,0.007454,0.010035,0.007117,0.009748,0.006763,0.009411,0.006999,0.008770,0.009596,0.009057,0.006308,0.008922,0.008433,0.008416,0.009546,0.007185,0.009596,0.007454,0.010035,0.007117,0.008213,0.009276,0.007775,0.008348,0.007741,0.008922,0.008551,0.008888,0.006375]},{"w":" ","p":[0.176580,0.661825,0.185013,0.661825,0.185013,0.661812,0.176580,0.661812,0.008433]},{"w":"from (","p":[0.194052,0.663996,0.242641,0.663996,0.242641,0.652701,0.194052,0.652701,0.009326,0.007421,0.008433,0.007943,0.010018,0.005447]},{"w":"select 20051 yrq from t1 union all","p":[0.177491,0.679390,0.462730,0.679390,0.462730,0.668339,0.177491,0.668339,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008652,0.007623,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.007623,0.009428,0.008500,0.007977,0.008314,0.009006,0.007370,0.009175,0.008298,0.008433,0.007269]},{"w":"select 20052 yrq from t1 union all","p":[0.177491,0.694810,0.462730,0.694810,0.462730,0.683759,0.177491,0.683759,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008567,0.007707,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.007623,0.009428,0.008500,0.007977,0.008314,0.009006,0.007370,0.009175,0.008298,0.008433,0.007269]},{"w":"select 20053 yrq from t1 union all","p":[0.177491,0.710229,0.462730,0.710229,0.462730,0.699178,0.177491,0.699178,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008534,0.007741,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.007623,0.009428,0.008500,0.007977,0.008314,0.009006,0.007370,0.009175,0.008298,0.008433,0.007269]},{"w":"select 20054 yrq from t1","p":[0.177491,0.725649,0.378270,0.725649,0.378270,0.714598,0.177491,0.714598,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008298,0.007977,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.006932]},{"w":" ","p":[0.176580,0.738922,0.185013,0.738922,0.185013,0.738909,0.176580,0.738909,0.008433]},{"w":") x","p":[0.237041,0.741094,0.260585,0.741094,0.260585,0.729799,0.237041,0.729799,0.006999,0.008770,0.007775]},{"w":"YR ","p":[0.176799,0.769761,0.201878,0.769761,0.201878,0.761730,0.176799,0.761730,0.009141,0.007505,0.008433]},{"w":"MTH","p":[0.244580,0.769761,0.268579,0.769761,0.268579,0.761807,0.244580,0.761807,0.008551,0.008534,0.006915]},{"w":"-","p":[0.178941,0.782418,0.182652,0.782418,0.182652,0.781416,0.178941,0.781416,0.003710]},{"w":"-","p":[0.187374,0.782418,0.191084,0.782418,0.191084,0.781416,0.187374,0.781416,0.003710]},{"w":"-","p":[0.195806,0.782418,0.199517,0.782418,0.199517,0.781416,0.195806,0.781416,0.003710]},{"w":"-","p":[0.204239,0.782418,0.207949,0.782418,0.207949,0.781416,0.204239,0.781416,0.003710]},{"w":" ","p":[0.210310,0.785181,0.218743,0.785181,0.218743,0.785168,0.210310,0.785168,0.008433]},{"w":"-","p":[0.221104,0.782418,0.224814,0.782418,0.224814,0.781416,0.221104,0.781416,0.003710]},{"w":"-","p":[0.229537,0.782418,0.233247,0.782418,0.233247,0.781416,0.229537,0.781416,0.003710]},{"w":"-","p":[0.237969,0.782418,0.241679,0.782418,0.241679,0.781416,0.237969,0.781416,0.003710]},{"w":"-","p":[0.246402,0.782418,0.250112,0.782418,0.250112,0.781416,0.246402,0.781416,0.003710]},{"w":"-","p":[0.254834,0.782418,0.258544,0.782418,0.258544,0.781416,0.254834,0.781416,0.003710]},{"w":"-","p":[0.263267,0.782418,0.266977,0.782418,0.266977,0.781416,0.263267,0.781416,0.003710]},{"w":"2005 ","p":[0.177541,0.800755,0.218743,0.800755,0.218743,0.792467,0.177541,0.792467,0.008247,0.008433,0.008770,0.007319,0.008433]},{"w":"3","p":[0.261901,0.800755,0.268360,0.800755,0.268360,0.792467,0.261901,0.792467,0.006459]},{"w":"2005 ","p":[0.177541,0.816174,0.218743,0.816174,0.218743,0.807886,0.177541,0.807886,0.008247,0.008433,0.008770,0.007319,0.008433]},{"w":"6","p":[0.261816,0.816174,0.268478,0.816174,0.268478,0.808027,0.261816,0.808027,0.006662]},{"w":"2005 ","p":[0.177541,0.831594,0.218743,0.831594,0.218743,0.823306,0.177541,0.823306,0.008247,0.008433,0.008770,0.007319,0.008433]},{"w":"9","p":[0.261766,0.831452,0.268444,0.831452,0.268444,0.823306,0.261766,0.823306,0.006679]},{"w":"2005 ","p":[0.177541,0.847013,0.218743,0.847013,0.218743,0.838725,0.177541,0.838725,0.008247,0.008433,0.008770,0.007319,0.008433]},{"w":"12","p":[0.253738,0.846859,0.268411,0.846859,0.268411,0.838725,0.253738,0.838725,0.008129,0.006544]},{"w":"9.9 Determining Quarter Start and End Dates for a Given Quarter ","p":[0.421642,0.938082,0.798642,0.938082,0.798642,0.925850,0.421642,0.925850,0.007679,0.003464,0.006804,0.003875,0.007875,0.006714,0.005429,0.007304,0.004875,0.011643,0.003679,0.007732,0.003679,0.007500,0.007036,0.003321,0.008643,0.007196,0.007482,0.004286,0.005429,0.007304,0.004071,0.003286,0.006518,0.005286,0.007482,0.004286,0.004893,0.003214,0.007482,0.007482,0.007054,0.003875,0.006464,0.007482,0.007054,0.003875,0.007732,0.006893,0.005429,0.006857,0.005143,0.002929,0.005071,0.007589,0.004071,0.003214,0.006679,0.003304,0.008446,0.003018,0.007071,0.007304,0.006946,0.003321,0.008643,0.007196,0.007482,0.004286,0.005429,0.007304,0.004071,0.002821]},{"w":"| ","p":[0.814820,0.938762,0.820249,0.938762,0.820249,0.925170,0.814820,0.925170,0.002607,0.002821]},{"w":"289","p":[0.835785,0.935469,0.856677,0.935469,0.856677,0.926422,0.835785,0.926422,0.007214,0.007339,0.006339]}]};