positionForPages[315]={"page":316,"positions":[{"w":"At this point, you have the year and end month for each quarter. Use those values to","p":[0.143274,0.098823,0.856372,0.098823,0.856372,0.083458,0.143274,0.083458,0.013479,0.006000,0.006158,0.006375,0.011417,0.005771,0.006792,0.006158,0.011333,0.010521,0.005521,0.010750,0.006917,0.003833,0.005825,0.010312,0.010458,0.010458,0.006179,0.011563,0.007937,0.010437,0.008083,0.006158,0.006375,0.011521,0.008083,0.005825,0.010313,0.008896,0.009021,0.007042,0.006617,0.008938,0.011583,0.010208,0.006575,0.008687,0.011583,0.010208,0.006367,0.017271,0.010458,0.010750,0.006375,0.010750,0.006367,0.006375,0.010542,0.007042,0.006575,0.008896,0.009125,0.008396,0.010750,0.006617,0.010437,0.011271,0.009021,0.007396,0.006771,0.008771,0.006938,0.003542,0.006492,0.014396,0.007562,0.008083,0.006158,0.006375,0.011521,0.010708,0.007562,0.008083,0.005784,0.010479,0.008646,0.005562,0.011229,0.008938,0.006792,0.006158,0.006771,0.009083]},{"w":"construct a date, specifically, the first day of the last month for each quarter. Use the","p":[0.143643,0.117871,0.856616,0.117871,0.856616,0.102506,0.143643,0.102506,0.008792,0.010458,0.011646,0.007146,0.006688,0.007646,0.011250,0.008375,0.006000,0.006843,0.008333,0.006822,0.011021,0.008292,0.006771,0.009000,0.003833,0.006884,0.007146,0.011333,0.008875,0.008688,0.005479,0.006271,0.005708,0.008833,0.008646,0.005271,0.004979,0.008937,0.003833,0.006384,0.006375,0.011521,0.008083,0.006593,0.006271,0.005604,0.007896,0.007146,0.006000,0.006822,0.011021,0.007979,0.009542,0.006801,0.010417,0.005604,0.006384,0.006375,0.011521,0.008083,0.006343,0.005771,0.009187,0.007146,0.006000,0.006593,0.017271,0.010458,0.010750,0.006375,0.010750,0.006593,0.006375,0.010542,0.007042,0.006801,0.008896,0.009125,0.008396,0.010750,0.006843,0.010438,0.011271,0.009021,0.007396,0.006771,0.008771,0.006938,0.003542,0.006718,0.014396,0.007562,0.008083,0.006384,0.006375,0.011521,0.007563]},{"w":"concatenation operator + to glue together the year and month, and then use the ","p":[0.143658,0.136918,0.853731,0.136918,0.853731,0.121553,0.143658,0.121553,0.008792,0.010458,0.011583,0.008833,0.008292,0.006771,0.008688,0.011604,0.008292,0.006667,0.005688,0.010458,0.010792,0.008921,0.010208,0.011333,0.008771,0.007854,0.008292,0.006771,0.010542,0.007042,0.009233,0.011000,0.008504,0.006771,0.009854,0.008754,0.009458,0.005562,0.011229,0.008083,0.008504,0.006771,0.010458,0.009917,0.008437,0.006375,0.011521,0.008771,0.007042,0.008504,0.006375,0.011521,0.008083,0.008171,0.010313,0.008896,0.009021,0.007042,0.008962,0.008938,0.011583,0.010208,0.008712,0.017271,0.010458,0.010750,0.006375,0.011667,0.003833,0.008962,0.008938,0.011583,0.010208,0.008504,0.006375,0.011521,0.008688,0.010792,0.008754,0.011313,0.007562,0.008083,0.008504,0.006375,0.011521,0.008083,0.004729]},{"w":"CAST function to convert to a date:","p":[0.143777,0.152125,0.438173,0.152125,0.438173,0.140601,0.143777,0.140601,0.013354,0.014854,0.009583,0.012271,0.005292,0.006208,0.011062,0.011583,0.008375,0.006667,0.005688,0.010458,0.010792,0.005083,0.006771,0.009854,0.005521,0.008792,0.010458,0.010292,0.010437,0.008771,0.007396,0.006000,0.005083,0.006771,0.009854,0.005542,0.008333,0.005521,0.011021,0.008292,0.006771,0.009313,0.002333]},{"w":"select cast(substring(cast(yrq as varchar),1,4)+'-'+","p":[0.177496,0.181015,0.614403,0.181015,0.614403,0.169720,0.177496,0.169720,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009175,0.008433,0.008601,0.008129,0.009411,0.007758,0.008517,0.008483,0.008298,0.008129,0.009326,0.007539,0.008888,0.007927,0.009461,0.007589,0.008433,0.008601,0.008129,0.009411,0.007185,0.009596,0.007454,0.007910,0.009175,0.008601,0.007522,0.008669,0.008938,0.009191,0.007674,0.008753,0.008112,0.009191,0.008365,0.009124,0.007117,0.009748,0.006763,0.009411,0.007674,0.010895,0.007201,0.009664,0.005970,0.007083]},{"w":" ","p":[0.176585,0.194263,0.185018,0.194263,0.185018,0.194250,0.176585,0.194250,0.008433]},{"w":"cast(yrq%10*3 as varchar)+'-1' as datetime) q","p":[0.236355,0.196435,0.614032,0.196435,0.614032,0.185140,0.236355,0.185140,0.008433,0.008601,0.008129,0.009411,0.007185,0.009596,0.007454,0.007943,0.009208,0.008213,0.008618,0.008348,0.007741,0.009175,0.008601,0.007522,0.008669,0.008938,0.009191,0.007674,0.008753,0.008112,0.009191,0.008365,0.007674,0.010895,0.007201,0.007336,0.010760,0.005296,0.009175,0.008601,0.007522,0.008905,0.008702,0.008298,0.008348,0.008517,0.008433,0.008315,0.008466,0.009343,0.006999,0.008955,0.006864]},{"w":"_end","p":[0.615212,0.196370,0.647627,0.196370,0.647627,0.185345,0.615212,0.185345,0.008820,0.008972,0.007842,0.006780]},{"w":" ","p":[0.176586,0.209683,0.185018,0.209683,0.185018,0.209670,0.176586,0.209670,0.008433]},{"w":"from (","p":[0.194058,0.211854,0.242646,0.211854,0.242646,0.200559,0.194058,0.200559,0.009326,0.007421,0.008433,0.007943,0.010018,0.005447]},{"w":"select 20051 yrq from t1 union all","p":[0.177496,0.227248,0.462735,0.227248,0.462735,0.216197,0.177496,0.216197,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008652,0.007623,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.007623,0.009428,0.008500,0.007977,0.008314,0.009006,0.007370,0.009175,0.008298,0.008433,0.007269]},{"w":"select 20052 yrq from t1 union all","p":[0.177496,0.242667,0.462735,0.242667,0.462735,0.231617,0.177496,0.231617,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008567,0.007707,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.007623,0.009428,0.008500,0.007977,0.008314,0.009006,0.007370,0.009175,0.008298,0.008433,0.007269]},{"w":"select 20053 yrq from t1 union all","p":[0.177496,0.258087,0.462735,0.258087,0.462735,0.247036,0.177496,0.247036,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008534,0.007741,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.007623,0.009428,0.008500,0.007977,0.008314,0.009006,0.007370,0.009175,0.008298,0.008433,0.007269]},{"w":"select 20054 yrq from t1","p":[0.177496,0.273506,0.378275,0.273506,0.378275,0.262456,0.177496,0.262456,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009158,0.008298,0.008433,0.008433,0.008298,0.007977,0.008770,0.009596,0.007454,0.007910,0.009040,0.009326,0.007421,0.008433,0.007943,0.009040,0.008635,0.006932]},{"w":" ","p":[0.176586,0.286780,0.185018,0.286780,0.185018,0.286767,0.176586,0.286767,0.008433]},{"w":") x","p":[0.237047,0.288952,0.260591,0.288952,0.260591,0.277657,0.237047,0.277657,0.006999,0.008770,0.007775]},{"w":"Q_END","p":[0.177075,0.319726,0.218074,0.319726,0.218074,0.309498,0.177075,0.309498,0.008078,0.009832,0.007825,0.008416,0.006847]},{"w":"-","p":[0.178947,0.330276,0.182657,0.330276,0.182657,0.329274,0.178947,0.329274,0.003710]},{"w":"-","p":[0.187379,0.330276,0.191089,0.330276,0.191089,0.329274,0.187379,0.329274,0.003710]},{"w":"-","p":[0.195812,0.330276,0.199522,0.330276,0.199522,0.329274,0.195812,0.329274,0.003710]},{"w":"-","p":[0.204244,0.330276,0.207955,0.330276,0.207955,0.329274,0.204244,0.329274,0.003710]},{"w":"-","p":[0.212677,0.330276,0.216387,0.330276,0.216387,0.329274,0.212677,0.329274,0.003710]},{"w":"-","p":[0.221109,0.330276,0.224820,0.330276,0.224820,0.329274,0.221109,0.329274,0.003710]},{"w":"-","p":[0.229542,0.330276,0.233252,0.330276,0.233252,0.329274,0.229542,0.329274,0.003710]},{"w":"-","p":[0.237974,0.330276,0.241685,0.330276,0.241685,0.329274,0.237974,0.329274,0.003710]},{"w":"-","p":[0.246407,0.330276,0.250117,0.330276,0.250117,0.329274,0.246407,0.329274,0.003710]},{"w":"-","p":[0.254839,0.330276,0.258550,0.330276,0.258550,0.329274,0.254839,0.329274,0.003710]},{"w":"-","p":[0.263272,0.330276,0.266982,0.330276,0.266982,0.329274,0.263272,0.329274,0.003710]},{"w":"01-MAR-2005","p":[0.177361,0.348612,0.268365,0.348612,0.268365,0.340324,0.177361,0.340324,0.008922,0.009529,0.006611,0.008045,0.009208,0.009866,0.007033,0.008247,0.008433,0.008770,0.006341]},{"w":"01-JUN-2005","p":[0.177361,0.364032,0.268365,0.364032,0.268365,0.355744,0.177361,0.355744,0.008922,0.009529,0.006982,0.008331,0.008551,0.009866,0.007033,0.008247,0.008433,0.008770,0.006341]},{"w":"01-SEP-2005","p":[0.177361,0.379451,0.268365,0.379451,0.268365,0.371163,0.177361,0.371163,0.008922,0.009529,0.006999,0.009040,0.008129,0.009563,0.007033,0.008247,0.008433,0.008770,0.006341]},{"w":"01-DEC-2005","p":[0.177361,0.394871,0.268365,0.394871,0.268365,0.386583,0.177361,0.386583,0.008922,0.009529,0.006982,0.009057,0.007674,0.010018,0.007033,0.008247,0.008433,0.008770,0.006341]},{"w":"The values for Q","p":[0.143448,0.422907,0.286449,0.422907,0.286449,0.409082,0.143448,0.409082,0.012646,0.011521,0.008083,0.006514,0.010479,0.008646,0.005562,0.011229,0.008938,0.006792,0.007098,0.006375,0.010542,0.007042,0.007452,0.014083]},{"w":"_END are the first day of the last month of each quarter. To get to","p":[0.286970,0.424447,0.856379,0.424447,0.856379,0.409082,0.286970,0.409082,0.011021,0.011646,0.015750,0.014625,0.007348,0.009021,0.007813,0.008083,0.006889,0.006375,0.011521,0.008083,0.007098,0.006271,0.005604,0.007896,0.007146,0.006000,0.007327,0.011021,0.007979,0.009542,0.007306,0.010417,0.005604,0.006889,0.006375,0.011521,0.008083,0.006848,0.005771,0.009187,0.007146,0.006000,0.007098,0.017271,0.010458,0.010750,0.006375,0.010750,0.007306,0.010417,0.005604,0.007306,0.008896,0.009125,0.008396,0.010750,0.007348,0.010438,0.011271,0.009021,0.007396,0.006771,0.008771,0.006938,0.003542,0.007119,0.011000,0.009854,0.007139,0.009917,0.008438,0.006000,0.006889,0.006771,0.009083]},{"w":"the last day of the month, add one month to Q","p":[0.143213,0.443494,0.538165,0.443494,0.538165,0.428129,0.143213,0.428129,0.006375,0.011521,0.008083,0.006014,0.005771,0.009187,0.007146,0.006000,0.006493,0.011021,0.007979,0.009542,0.006472,0.010417,0.005604,0.006056,0.006375,0.011521,0.008083,0.006264,0.017271,0.010458,0.010750,0.006375,0.011667,0.003833,0.006514,0.009125,0.011000,0.010208,0.006472,0.010458,0.011562,0.008083,0.006264,0.017271,0.010458,0.010750,0.006375,0.010750,0.006056,0.006771,0.009854,0.006618,0.014083]},{"w":"_END and subtract one day using the","p":[0.538685,0.443494,0.856623,0.443494,0.856623,0.428129,0.538685,0.428129,0.011021,0.011646,0.015750,0.014625,0.006514,0.008938,0.011583,0.010208,0.006556,0.007396,0.010604,0.010792,0.006687,0.007854,0.009125,0.008375,0.006000,0.006472,0.010458,0.011563,0.008083,0.006493,0.011021,0.007979,0.009542,0.006306,0.011313,0.007458,0.005521,0.011396,0.009146,0.006056,0.006375,0.011521,0.007563]},{"w":"DATEADD function. To find the start date for each quarter, subtract two months","p":[0.143540,0.462304,0.856513,0.462304,0.856513,0.447177,0.143540,0.447177,0.014292,0.013187,0.012875,0.011646,0.014667,0.015312,0.014625,0.008611,0.006208,0.011063,0.011583,0.008375,0.006667,0.005688,0.010458,0.012000,0.003542,0.008631,0.011000,0.009854,0.008611,0.006271,0.005521,0.011583,0.010208,0.008402,0.006375,0.011521,0.008083,0.008902,0.007146,0.006813,0.009021,0.007396,0.006000,0.008840,0.011021,0.008292,0.006771,0.008083,0.008611,0.006375,0.010542,0.007042,0.008819,0.008896,0.009125,0.008396,0.010750,0.008861,0.010437,0.011271,0.009021,0.007396,0.006771,0.008771,0.006646,0.003833,0.008902,0.007396,0.010604,0.010792,0.006688,0.007854,0.009125,0.008375,0.006000,0.008402,0.006188,0.014854,0.009854,0.008611,0.017271,0.010458,0.010750,0.006375,0.011604,0.006167]},{"w":"from Q","p":[0.143430,0.480050,0.204180,0.480050,0.204180,0.466224,0.143430,0.466224,0.006292,0.007813,0.010417,0.016500,0.005646,0.014083]},{"w":"_END using the DATEADD function.","p":[0.204701,0.481590,0.520659,0.481590,0.520659,0.466224,0.204701,0.466224,0.011021,0.011646,0.015750,0.014625,0.005333,0.011312,0.007458,0.005521,0.011396,0.009146,0.005083,0.006375,0.011521,0.008083,0.005417,0.014292,0.013187,0.012875,0.011646,0.014667,0.015312,0.014625,0.005292,0.006208,0.011063,0.011583,0.008375,0.006667,0.005688,0.010458,0.012000,0.002333]},{"w":"9.10 Filling in Missing Dates","p":[0.143880,0.529038,0.484741,0.529038,0.484741,0.503554,0.143880,0.503554,0.016142,0.008259,0.014265,0.014378,0.008146,0.013364,0.007883,0.007883,0.007696,0.007733,0.015767,0.014791,0.007583,0.007733,0.014603,0.007358,0.023500,0.006795,0.011562,0.012463,0.007733,0.015767,0.014791,0.008146,0.016255,0.014490,0.011412,0.014415,0.009948]},{"w":"Problem","p":[0.144703,0.565112,0.228810,0.565112,0.228810,0.548448,0.144703,0.548448,0.013048,0.008073,0.013298,0.013423,0.005976,0.012797,0.017491]},{"w":"You need to generate a row for every date (or every month, week, or year) within a","p":[0.143176,0.596570,0.857025,0.596570,0.857025,0.581205,0.143176,0.581205,0.011125,0.010458,0.010458,0.007148,0.011562,0.008854,0.008875,0.010208,0.006898,0.006771,0.009854,0.007148,0.009917,0.008688,0.011562,0.008771,0.007854,0.008292,0.006771,0.008083,0.007356,0.008333,0.007231,0.007813,0.010042,0.014083,0.007106,0.006375,0.010542,0.007042,0.007315,0.008063,0.010437,0.008771,0.007667,0.009542,0.007336,0.011021,0.008292,0.006771,0.008083,0.008002,0.006521,0.010542,0.007042,0.007315,0.008063,0.010437,0.008771,0.007667,0.009542,0.007106,0.017271,0.010458,0.010750,0.006375,0.011667,0.003833,0.006731,0.014854,0.008854,0.008375,0.010958,0.003833,0.007315,0.010542,0.007042,0.006565,0.010312,0.008896,0.009021,0.007979,0.006271,0.006731,0.014750,0.005271,0.006375,0.011417,0.005521,0.010792,0.007356,0.008208]},{"w":"given range. Such rowsets are often used to generate summary reports. For example,","p":[0.143462,0.615617,0.856269,0.615617,0.856269,0.600252,0.143462,0.600252,0.009813,0.004896,0.010437,0.008688,0.010792,0.006560,0.007854,0.008938,0.011396,0.009917,0.009292,0.003542,0.006748,0.009604,0.011250,0.008396,0.010750,0.006560,0.007813,0.010042,0.014938,0.007562,0.008438,0.006854,0.006792,0.006685,0.009021,0.007813,0.008083,0.006644,0.010417,0.005958,0.006771,0.008687,0.010792,0.006477,0.011312,0.007563,0.008875,0.010208,0.006227,0.006771,0.009854,0.006477,0.009917,0.008687,0.011563,0.008771,0.007854,0.008292,0.006771,0.008083,0.006727,0.007396,0.011021,0.017062,0.017313,0.009021,0.007667,0.009542,0.006560,0.007813,0.008438,0.011333,0.010542,0.007396,0.006854,0.008000,0.003542,0.006706,0.010562,0.010542,0.007042,0.006644,0.008167,0.010562,0.008896,0.016458,0.010875,0.005729,0.009000,0.002958]},{"w":"you want to count the number of employees hired every month of every year in","p":[0.142873,0.634665,0.856638,0.634665,0.856638,0.619300,0.142873,0.619300,0.010313,0.010458,0.010458,0.008812,0.014896,0.008938,0.010750,0.006000,0.008979,0.006771,0.009854,0.009416,0.008792,0.010458,0.011063,0.010750,0.006000,0.008979,0.006375,0.011521,0.008083,0.009229,0.011000,0.011021,0.016646,0.011208,0.008771,0.007042,0.009395,0.010417,0.005604,0.009395,0.008646,0.016458,0.010875,0.005729,0.009875,0.010313,0.008854,0.008937,0.006792,0.009000,0.011417,0.005604,0.007813,0.008875,0.010208,0.009395,0.008063,0.010437,0.008771,0.007667,0.009542,0.009187,0.017271,0.010458,0.010750,0.006375,0.010750,0.009395,0.010417,0.005604,0.009395,0.008062,0.010437,0.008771,0.007667,0.009542,0.008645,0.010313,0.008896,0.009021,0.007042,0.009291,0.005521,0.010292]},{"w":"which any employee has been hired. Examining the dates of all the employees hired,","p":[0.143054,0.653713,0.856277,0.653713,0.856277,0.638348,0.143054,0.638348,0.014458,0.011417,0.005708,0.008396,0.010750,0.006802,0.008938,0.010333,0.009542,0.006761,0.008646,0.016458,0.010875,0.005729,0.009875,0.010312,0.008854,0.008083,0.006365,0.011562,0.009187,0.006792,0.006136,0.011208,0.008854,0.008688,0.010792,0.006365,0.011417,0.005604,0.007813,0.008875,0.011417,0.003542,0.006594,0.011313,0.010562,0.008896,0.017167,0.005521,0.011458,0.005521,0.011396,0.009146,0.006344,0.006375,0.011521,0.008083,0.006782,0.011021,0.008292,0.006771,0.008937,0.006792,0.006761,0.010417,0.005604,0.006802,0.008646,0.005271,0.004958,0.006344,0.006375,0.011521,0.008083,0.006761,0.008646,0.016458,0.010875,0.005729,0.009875,0.010312,0.008854,0.008938,0.006792,0.006365,0.011417,0.005604,0.007813,0.008875,0.011125,0.002958]},{"w":"there have been hirings from 2000 to 2003:","p":[0.143215,0.672760,0.497902,0.672760,0.497902,0.657395,0.143215,0.657395,0.006375,0.011521,0.008771,0.007813,0.008083,0.005104,0.011562,0.007938,0.010437,0.008083,0.004875,0.011208,0.008854,0.008687,0.010792,0.005104,0.011417,0.005604,0.007708,0.005521,0.011396,0.010000,0.006792,0.005292,0.006292,0.007813,0.010417,0.016500,0.005375,0.010083,0.010000,0.010000,0.009271,0.005083,0.006771,0.009854,0.005375,0.010083,0.010000,0.010188,0.010312,0.002333]},{"w":"select distinct","p":[0.177490,0.695766,0.302595,0.695766,0.302595,0.686720,0.177490,0.686720,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.008905,0.008567,0.008736,0.008129,0.008433,0.008888,0.008112,0.008298,0.007353]},{"w":" ","p":[0.176579,0.711057,0.185012,0.711057,0.185012,0.711044,0.176579,0.711044,0.008433]},{"w":"extract(year from hiredate) as year","p":[0.236130,0.713229,0.530054,0.713229,0.530054,0.701934,0.236130,0.701934,0.008247,0.008702,0.009326,0.007674,0.008433,0.008298,0.009411,0.007185,0.008618,0.008652,0.009191,0.006932,0.009040,0.009326,0.007421,0.008433,0.007943,0.009495,0.007977,0.009326,0.007454,0.008382,0.008702,0.008298,0.008348,0.009343,0.006999,0.009175,0.008601,0.007522,0.008770,0.008618,0.008652,0.009191,0.006240]},{"w":" ","p":[0.176579,0.726477,0.185012,0.726477,0.185012,0.726464,0.176579,0.726464,0.008433]},{"w":"from emp","p":[0.194051,0.728584,0.260382,0.728584,0.260382,0.717572,0.194051,0.717572,0.009326,0.007421,0.008433,0.007943,0.008955,0.008399,0.009006,0.006847]},{"w":"YEAR","p":[0.176798,0.757316,0.209685,0.757316,0.209685,0.749285,0.176798,0.749285,0.009748,0.007050,0.009208,0.006881]},{"w":"-","p":[0.178940,0.769973,0.182651,0.769973,0.182651,0.768971,0.178940,0.768971,0.003710]},{"w":"-","p":[0.187373,0.769973,0.191083,0.769973,0.191083,0.768971,0.187373,0.768971,0.003710]},{"w":"-","p":[0.195805,0.769973,0.199516,0.769973,0.199516,0.768971,0.195805,0.768971,0.003710]},{"w":"-","p":[0.204238,0.769973,0.207948,0.769973,0.207948,0.768971,0.204238,0.768971,0.003710]},{"w":"-","p":[0.212670,0.769973,0.216381,0.769973,0.216381,0.768971,0.212670,0.768971,0.003710]},{"w":" 2000","p":[0.176579,0.788309,0.217966,0.788309,0.217966,0.780021,0.176579,0.780021,0.009394,0.008247,0.008433,0.008433,0.006881]},{"w":" 2001","p":[0.176579,0.803729,0.217696,0.803729,0.217696,0.795441,0.176579,0.795441,0.009394,0.008247,0.008433,0.008922,0.006122]},{"w":" 2002","p":[0.176579,0.819148,0.217814,0.819148,0.217814,0.810860,0.176579,0.810860,0.009394,0.008247,0.008433,0.008618,0.006544]},{"w":" 2003","p":[0.176579,0.834568,0.217764,0.834568,0.217764,0.826280,0.176579,0.826280,0.009394,0.008247,0.008433,0.008652,0.006459]},{"w":"You want to determine the number of employees hired each month from 2000 to","p":[0.143179,0.864144,0.856382,0.864144,0.856382,0.848779,0.143179,0.848779,0.011125,0.010458,0.010458,0.008254,0.014896,0.008938,0.010750,0.006000,0.008421,0.006771,0.009854,0.008858,0.010979,0.008438,0.006771,0.008771,0.007604,0.017167,0.005521,0.011562,0.008083,0.008421,0.006375,0.011521,0.008083,0.008671,0.011000,0.011021,0.016646,0.011208,0.008771,0.007042,0.008838,0.010417,0.005604,0.008838,0.008646,0.016458,0.010875,0.005729,0.009875,0.010313,0.008854,0.008937,0.006792,0.008442,0.011417,0.005604,0.007813,0.008875,0.010208,0.008838,0.008896,0.009125,0.008396,0.010750,0.008629,0.017271,0.010458,0.010750,0.006375,0.010750,0.008629,0.006292,0.007813,0.010417,0.016500,0.008713,0.010083,0.010000,0.010000,0.009271,0.008421,0.006771,0.009083]},{"w":"2003. A portion of the desired result set is shown here:","p":[0.143507,0.882921,0.594507,0.882921,0.594507,0.867826,0.143507,0.867826,0.010083,0.010000,0.010187,0.010292,0.003542,0.005146,0.013979,0.005083,0.011333,0.010542,0.007396,0.006667,0.005688,0.010458,0.010792,0.005500,0.010417,0.005604,0.005083,0.006375,0.011521,0.008083,0.005521,0.010979,0.008937,0.007458,0.005604,0.007813,0.008875,0.010208,0.005417,0.007813,0.008937,0.007396,0.010771,0.005312,0.006000,0.005583,0.007563,0.008437,0.006000,0.005396,0.005771,0.006792,0.005583,0.007167,0.011521,0.010042,0.014688,0.010792,0.005104,0.011521,0.008771,0.007813,0.009312,0.002333]},{"w":"9.10 Filling in Missing Dates ","p":[0.633266,0.938082,0.798641,0.938082,0.798641,0.925959,0.633266,0.925959,0.007679,0.003929,0.006786,0.006839,0.003875,0.006357,0.003750,0.003750,0.003661,0.003679,0.007500,0.007036,0.003607,0.003679,0.006946,0.003500,0.011179,0.003232,0.005500,0.005929,0.003679,0.007500,0.007036,0.003875,0.007732,0.006893,0.005429,0.006857,0.005143,0.002821]},{"w":"| ","p":[0.814819,0.938762,0.820248,0.938762,0.820248,0.925170,0.814819,0.925170,0.002607,0.002821]},{"w":"293","p":[0.835783,0.935469,0.856123,0.935469,0.856123,0.926422,0.835783,0.926422,0.007268,0.007268,0.005804]}]};