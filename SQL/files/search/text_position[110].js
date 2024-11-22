positionForPages[109]={"page":110,"positions":[{"w":"this discriminating column (or columns) is a primary key. We used the ID column,","p":[0.143211,0.098823,0.856268,0.098823,0.856268,0.083458,0.143211,0.083458,0.006375,0.011417,0.005771,0.006792,0.007440,0.010875,0.005771,0.007583,0.008708,0.007708,0.005479,0.017167,0.005521,0.011604,0.008292,0.006667,0.005521,0.011396,0.009146,0.007440,0.008792,0.010167,0.005562,0.011021,0.017104,0.010792,0.008107,0.006521,0.010542,0.007042,0.007440,0.008792,0.010167,0.005562,0.011021,0.017104,0.011646,0.007729,0.006271,0.007315,0.005771,0.006792,0.007461,0.008333,0.007003,0.011250,0.007708,0.005479,0.017312,0.009021,0.007667,0.009542,0.006940,0.010812,0.008104,0.009229,0.003542,0.006982,0.018646,0.008083,0.007253,0.011313,0.007562,0.008875,0.010208,0.007003,0.006375,0.011521,0.008083,0.007440,0.007000,0.014625,0.007440,0.008792,0.010167,0.005562,0.011021,0.017104,0.011708,0.002958]},{"w":"which is a good choice because no two records have the same ID.","p":[0.143039,0.117871,0.681497,0.117871,0.681497,0.102506,0.143039,0.102506,0.014458,0.011417,0.005708,0.008396,0.010750,0.005396,0.005771,0.006792,0.005542,0.008333,0.005333,0.009917,0.010625,0.010646,0.010208,0.005521,0.008396,0.011521,0.010521,0.005708,0.008792,0.008083,0.004875,0.011208,0.008875,0.008833,0.008542,0.011312,0.007563,0.008083,0.005333,0.011562,0.009854,0.005083,0.006187,0.014854,0.009854,0.005417,0.007813,0.008875,0.008792,0.010542,0.007833,0.011063,0.006792,0.005104,0.011563,0.007937,0.010437,0.008083,0.005083,0.006375,0.011521,0.008083,0.005583,0.007604,0.008896,0.017271,0.008083,0.005521,0.007000,0.015000,0.002333]},{"w":"The key to the solution is that you group by the values that are duplicated (by NAME","p":[0.143435,0.145989,0.856678,0.145989,0.856678,0.130624,0.143435,0.130624,0.012646,0.011521,0.008083,0.005468,0.010812,0.008104,0.009542,0.005531,0.006771,0.009854,0.005531,0.006375,0.011521,0.008083,0.006031,0.007562,0.010167,0.005562,0.010812,0.006667,0.005688,0.010458,0.010792,0.005843,0.005771,0.006792,0.005531,0.006375,0.011562,0.008292,0.006000,0.005198,0.010313,0.010458,0.010458,0.005781,0.009833,0.007813,0.010458,0.010812,0.010563,0.005323,0.010458,0.009542,0.005531,0.006375,0.011521,0.008083,0.005156,0.010479,0.008646,0.005562,0.011229,0.008937,0.006792,0.005531,0.006375,0.011562,0.008292,0.006000,0.005989,0.009021,0.007812,0.008083,0.005968,0.010813,0.010812,0.010875,0.005625,0.005708,0.008833,0.008292,0.006771,0.008875,0.010208,0.006635,0.005896,0.010458,0.009542,0.005593,0.014688,0.014521,0.018625,0.010771]},{"w":"in this case), and then use an aggregate function to pick off just one key value to","p":[0.143533,0.165036,0.856381,0.165036,0.856381,0.149671,0.143533,0.149671,0.005521,0.010792,0.008224,0.006375,0.011417,0.005771,0.006792,0.008661,0.008833,0.009188,0.007563,0.009021,0.007188,0.003833,0.008682,0.008937,0.011583,0.010208,0.008224,0.006375,0.011521,0.008688,0.010792,0.008474,0.011313,0.007562,0.008083,0.008682,0.008938,0.010792,0.008682,0.008937,0.009750,0.009833,0.007813,0.008688,0.009958,0.008292,0.006771,0.008083,0.008432,0.006208,0.011063,0.011583,0.008375,0.006667,0.005687,0.010458,0.010792,0.008224,0.006771,0.009854,0.008224,0.011229,0.005708,0.008313,0.010042,0.008640,0.010417,0.006167,0.005604,0.007369,0.006438,0.011313,0.007146,0.006000,0.008640,0.010458,0.011562,0.008083,0.008161,0.010812,0.008104,0.009542,0.007849,0.010479,0.008646,0.005562,0.011229,0.008083,0.008224,0.006771,0.009083]},{"w":"retain. The subquery in the \u201cSolution\u201d example will return the smallest ID for each","p":[0.143548,0.184084,0.856709,0.184084,0.856709,0.168655,0.143548,0.168655,0.007813,0.008438,0.006813,0.009000,0.005521,0.012000,0.003542,0.007498,0.012646,0.011521,0.008083,0.007769,0.007396,0.010604,0.011250,0.010437,0.011229,0.008771,0.007667,0.009542,0.007581,0.005521,0.010792,0.007269,0.006375,0.011521,0.008083,0.007790,0.007729,0.009771,0.010167,0.005562,0.010812,0.006667,0.005688,0.010458,0.009937,0.007500,0.007685,0.008167,0.010562,0.008896,0.016458,0.010875,0.005729,0.008083,0.007102,0.014750,0.005229,0.005271,0.004958,0.007602,0.007813,0.008438,0.006604,0.011146,0.007646,0.010792,0.007269,0.006375,0.011521,0.008083,0.007769,0.007354,0.017312,0.008646,0.005271,0.005729,0.008938,0.007146,0.006000,0.007706,0.007000,0.014625,0.007477,0.006375,0.010542,0.007042,0.007685,0.008896,0.009125,0.008396,0.010313]},{"w":"NAME, which represents the row you will not delete:","p":[0.143271,0.203132,0.583146,0.203132,0.583146,0.187766,0.143271,0.187766,0.014688,0.014521,0.018625,0.012146,0.003833,0.004917,0.014458,0.011417,0.005708,0.008396,0.010750,0.005417,0.007813,0.008438,0.011250,0.007813,0.008938,0.007562,0.008688,0.010750,0.006854,0.006792,0.005083,0.006375,0.011521,0.008083,0.005417,0.007813,0.010042,0.014083,0.004750,0.010313,0.010458,0.010458,0.004917,0.014750,0.005229,0.005271,0.004958,0.005333,0.011562,0.010208,0.006000,0.005521,0.010979,0.008396,0.005729,0.008437,0.006771,0.009312,0.002333]},{"w":"select min(id)","p":[0.177497,0.228181,0.293091,0.228181,0.293091,0.216886,0.177497,0.216886,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.008922,0.008551,0.008888,0.008955,0.007454,0.008298,0.009394,0.005447]},{"w":" ","p":[0.176587,0.241429,0.185019,0.241429,0.185019,0.241416,0.176587,0.241416,0.008433]},{"w":"from dupes","p":[0.194059,0.243536,0.276799,0.243536,0.276799,0.232511,0.194059,0.232511,0.009326,0.007421,0.008433,0.007943,0.008905,0.008955,0.008500,0.007893,0.008820,0.006544]},{"w":" group by name","p":[0.176587,0.258994,0.294052,0.258994,0.294052,0.247930,0.176587,0.247930,0.008989,0.009377,0.007421,0.008938,0.008500,0.007370,0.009478,0.007724,0.008095,0.009495,0.008112,0.008180,0.008466,0.007319]},{"w":" ","p":[0.176587,0.287687,0.185019,0.287687,0.185019,0.287674,0.176587,0.287674,0.008433]},{"w":"MIN(ID)","p":[0.210857,0.289820,0.267422,0.289820,0.267422,0.278680,0.210857,0.278680,0.009394,0.007859,0.009411,0.008028,0.007842,0.009428,0.004604]},{"w":"-","p":[0.178948,0.300344,0.182658,0.300344,0.182658,0.299342,0.178948,0.299342,0.003710]},{"w":"-","p":[0.187380,0.300344,0.191091,0.300344,0.191091,0.299342,0.187380,0.299342,0.003710]},{"w":"-","p":[0.195813,0.300344,0.199523,0.300344,0.199523,0.299342,0.195813,0.299342,0.003710]},{"w":"-","p":[0.204245,0.300344,0.207956,0.300344,0.207956,0.299342,0.204245,0.299342,0.003710]},{"w":"-","p":[0.212678,0.300344,0.216388,0.300344,0.216388,0.299342,0.212678,0.299342,0.003710]},{"w":"-","p":[0.221110,0.300344,0.224821,0.300344,0.224821,0.299342,0.221110,0.299342,0.003710]},{"w":"-","p":[0.229543,0.300344,0.233253,0.300344,0.233253,0.299342,0.229543,0.299342,0.003710]},{"w":"-","p":[0.237976,0.300344,0.241686,0.300344,0.241686,0.299342,0.237976,0.299342,0.003710]},{"w":"-","p":[0.246408,0.300344,0.250118,0.300344,0.250118,0.299342,0.246408,0.299342,0.003710]},{"w":"-","p":[0.254841,0.300344,0.258551,0.300344,0.258551,0.299342,0.254841,0.299342,0.003710]},{"w":"-","p":[0.263273,0.300344,0.266983,0.300344,0.266983,0.299342,0.263273,0.299342,0.003710]},{"w":" ","p":[0.176587,0.318526,0.185019,0.318526,0.185019,0.318513,0.176587,0.318513,0.008433]},{"w":"2","p":[0.261873,0.318526,0.268417,0.318526,0.268417,0.310392,0.261873,0.310392,0.006544]},{"w":" ","p":[0.176587,0.333946,0.185019,0.333946,0.185019,0.333933,0.176587,0.333933,0.008433]},{"w":"1","p":[0.262177,0.333946,0.268299,0.333946,0.268299,0.325992,0.262177,0.325992,0.006122]},{"w":" ","p":[0.176587,0.349365,0.185019,0.349365,0.185019,0.349352,0.176587,0.349352,0.008433]},{"w":"5","p":[0.262025,0.349519,0.268366,0.349519,0.268366,0.341411,0.262025,0.341411,0.006341]},{"w":" ","p":[0.176587,0.364785,0.185019,0.364785,0.185019,0.364772,0.176587,0.364772,0.008433]},{"w":"4","p":[0.261519,0.364785,0.268771,0.364785,0.268771,0.356831,0.261519,0.356831,0.007252]},{"w":"The DELETE then deletes any ID in the table that is not returned by the subquery (in","p":[0.143449,0.394515,0.856651,0.394515,0.856651,0.379150,0.143449,0.379150,0.012646,0.011521,0.008083,0.005742,0.015229,0.011979,0.011063,0.011813,0.012875,0.011229,0.005408,0.006375,0.011521,0.008688,0.010792,0.005846,0.010979,0.008396,0.005729,0.008438,0.006771,0.008937,0.006792,0.005867,0.008938,0.010333,0.009542,0.005846,0.007000,0.014625,0.005721,0.005521,0.010792,0.005408,0.006375,0.011521,0.008083,0.005408,0.006813,0.008479,0.010750,0.005729,0.008083,0.005409,0.006375,0.011562,0.008292,0.006000,0.005721,0.005771,0.006792,0.005658,0.011563,0.010208,0.006000,0.005742,0.007813,0.008437,0.006604,0.011146,0.007646,0.011562,0.008875,0.010208,0.005200,0.010458,0.009542,0.005409,0.006375,0.011521,0.008083,0.005909,0.007396,0.010604,0.011250,0.010438,0.011229,0.008771,0.007667,0.009542,0.006513,0.006417,0.005521,0.010292]},{"w":"this case IDs 3, 6, and 7). If you are having trouble seeing how this works, run the","p":[0.143214,0.413562,0.856625,0.413562,0.856625,0.398197,0.143214,0.398197,0.006375,0.011417,0.005771,0.006792,0.007755,0.008833,0.009187,0.007563,0.008083,0.007755,0.007000,0.015479,0.006792,0.007880,0.010000,0.003833,0.007734,0.010146,0.003833,0.007775,0.008937,0.011583,0.010208,0.007942,0.009958,0.007479,0.003542,0.007755,0.006875,0.005604,0.006984,0.010312,0.010458,0.010458,0.007775,0.009021,0.007813,0.008083,0.007338,0.011562,0.007938,0.010333,0.005521,0.011396,0.009146,0.007317,0.006687,0.007813,0.010458,0.010604,0.010750,0.005729,0.008083,0.007817,0.007562,0.008854,0.008750,0.005521,0.011396,0.009146,0.007338,0.011521,0.010042,0.014083,0.007317,0.006375,0.011417,0.005771,0.006792,0.007150,0.014854,0.010542,0.007333,0.010896,0.007708,0.003833,0.007650,0.007646,0.011063,0.010792,0.007317,0.006375,0.011521,0.007563]},{"w":"subquery first and include the NAME in the SELECT list:","p":[0.143708,0.432610,0.619166,0.432610,0.619166,0.417245,0.143708,0.417245,0.007396,0.010604,0.011250,0.010437,0.011229,0.008771,0.007667,0.009542,0.005292,0.006271,0.005604,0.007896,0.007146,0.006000,0.005542,0.008937,0.011583,0.010208,0.005396,0.005521,0.011583,0.008333,0.005562,0.011250,0.010979,0.008083,0.005083,0.006375,0.011521,0.008083,0.005146,0.014687,0.014521,0.018625,0.011229,0.005396,0.005521,0.010792,0.005083,0.006375,0.011521,0.008083,0.005604,0.009604,0.011979,0.011063,0.012146,0.013521,0.012271,0.005042,0.005625,0.005771,0.007146,0.007229,0.002333]},{"w":"select name, min(id)","p":[0.177494,0.457659,0.343682,0.457659,0.343682,0.446364,0.177494,0.446364,0.008045,0.008517,0.008348,0.008652,0.008298,0.007825,0.009495,0.008112,0.008180,0.008466,0.010035,0.006308,0.008922,0.008551,0.008888,0.008955,0.007454,0.008298,0.009394,0.005447]},{"w":" ","p":[0.176583,0.470907,0.185015,0.470907,0.185015,0.470894,0.176583,0.470894,0.008433]},{"w":"from dupes","p":[0.194055,0.473014,0.276795,0.473014,0.276795,0.461989,0.194055,0.461989,0.009326,0.007421,0.008433,0.007943,0.008905,0.008955,0.008500,0.007893,0.008820,0.006544]},{"w":" group by name","p":[0.176583,0.488472,0.294048,0.488472,0.294048,0.477409,0.176583,0.477409,0.008989,0.009377,0.007421,0.008938,0.008500,0.007370,0.009478,0.007724,0.008095,0.009495,0.008112,0.008180,0.008466,0.007319]},{"w":"NAME ","p":[0.177510,0.517166,0.218746,0.517166,0.218746,0.509212,0.177510,0.509212,0.007657,0.008820,0.009428,0.006898,0.008433]},{"w":"MIN(ID)","p":[0.295178,0.519299,0.351744,0.519299,0.351744,0.508158,0.295178,0.508158,0.009394,0.007859,0.009411,0.008028,0.007842,0.009428,0.004604]},{"w":"-","p":[0.178944,0.529822,0.182654,0.529822,0.182654,0.528820,0.178944,0.528820,0.003710]},{"w":"-","p":[0.187377,0.529822,0.191087,0.529822,0.191087,0.528820,0.187377,0.528820,0.003710]},{"w":"-","p":[0.195809,0.529822,0.199519,0.529822,0.199519,0.528820,0.195809,0.528820,0.003710]},{"w":"-","p":[0.204242,0.529822,0.207952,0.529822,0.207952,0.528820,0.204242,0.528820,0.003710]},{"w":"-","p":[0.212674,0.529822,0.216384,0.529822,0.216384,0.528820,0.212674,0.528820,0.003710]},{"w":"-","p":[0.221107,0.529822,0.224817,0.529822,0.224817,0.528820,0.221107,0.528820,0.003710]},{"w":"-","p":[0.229539,0.529822,0.233250,0.529822,0.233250,0.528820,0.229539,0.528820,0.003710]},{"w":"-","p":[0.237972,0.529822,0.241682,0.529822,0.241682,0.528820,0.237972,0.528820,0.003710]},{"w":"-","p":[0.246404,0.529822,0.250115,0.529822,0.250115,0.528820,0.246404,0.528820,0.003710]},{"w":"-","p":[0.254837,0.529822,0.258547,0.529822,0.258547,0.528820,0.254837,0.528820,0.003710]},{"w":" ","p":[0.260908,0.532585,0.269341,0.532585,0.269341,0.532572,0.260908,0.532572,0.008433]},{"w":"-","p":[0.271702,0.529822,0.275412,0.529822,0.275412,0.528820,0.271702,0.528820,0.003710]},{"w":"-","p":[0.280134,0.529822,0.283845,0.529822,0.283845,0.528820,0.280134,0.528820,0.003710]},{"w":"-","p":[0.288567,0.529822,0.292277,0.529822,0.292277,0.528820,0.288567,0.528820,0.003710]},{"w":"-","p":[0.297000,0.529822,0.300710,0.529822,0.300710,0.528820,0.297000,0.528820,0.003710]},{"w":"-","p":[0.305432,0.529822,0.309142,0.529822,0.309142,0.528820,0.305432,0.528820,0.003710]},{"w":"-","p":[0.313865,0.529822,0.317575,0.529822,0.317575,0.528820,0.313865,0.528820,0.003710]},{"w":"-","p":[0.322297,0.529822,0.326007,0.529822,0.326007,0.528820,0.322297,0.528820,0.003710]},{"w":"-","p":[0.330730,0.529822,0.334440,0.529822,0.334440,0.528820,0.330730,0.528820,0.003710]},{"w":"-","p":[0.339162,0.529822,0.342873,0.529822,0.342873,0.528820,0.339162,0.528820,0.003710]},{"w":"-","p":[0.347595,0.529822,0.351305,0.529822,0.351305,0.528820,0.347595,0.528820,0.003710]},{"w":"DYNAMITE ","p":[0.177494,0.548056,0.252476,0.548056,0.252476,0.539974,0.177494,0.539974,0.007741,0.009141,0.007657,0.008820,0.009394,0.007589,0.009310,0.006898,0.008433]},{"w":"2","p":[0.346195,0.548005,0.352739,0.548005,0.352739,0.539871,0.346195,0.539871,0.006544]},{"w":"NAPOLEON ","p":[0.177510,0.563578,0.252476,0.563578,0.252476,0.555290,0.177510,0.555290,0.007657,0.009512,0.007690,0.009478,0.008433,0.007387,0.008871,0.007505,0.008433]},{"w":"1","p":[0.346499,0.563424,0.352621,0.563424,0.352621,0.555470,0.346499,0.555470,0.006122]},{"w":"SEA SHELLS ","p":[0.177510,0.578998,0.269341,0.578998,0.269341,0.570710,0.177510,0.570710,0.009040,0.007050,0.008281,0.009360,0.008264,0.009208,0.008433,0.008433,0.007825,0.007505,0.008433]},{"w":"5","p":[0.346347,0.578998,0.352688,0.578998,0.352688,0.570890,0.346347,0.570890,0.006341]},{"w":"SHE SELLS ","p":[0.177510,0.594417,0.260908,0.594417,0.260908,0.586129,0.177510,0.586129,0.008264,0.009208,0.006898,0.009360,0.009040,0.008433,0.008433,0.007825,0.007505,0.008433]},{"w":"4","p":[0.345841,0.594263,0.353093,0.594263,0.353093,0.586309,0.345841,0.586309,0.007252]},{"w":"The rows returned by the subquery represent those to be retained. The NOT IN","p":[0.143437,0.623993,0.856640,0.623993,0.856640,0.608628,0.143437,0.608628,0.012646,0.011521,0.008083,0.009306,0.007813,0.010042,0.014937,0.006792,0.009306,0.007813,0.008438,0.006604,0.011146,0.007646,0.011562,0.008875,0.010208,0.008764,0.010458,0.009542,0.008972,0.006375,0.011521,0.008083,0.009472,0.007396,0.010604,0.011250,0.010437,0.011229,0.008771,0.007667,0.009542,0.009306,0.007813,0.008437,0.011250,0.007813,0.008937,0.007562,0.008688,0.010750,0.006000,0.008972,0.006375,0.011521,0.010708,0.007562,0.008083,0.008972,0.006771,0.009854,0.008764,0.011208,0.008083,0.009306,0.007813,0.008438,0.006813,0.009000,0.005521,0.011562,0.008875,0.011417,0.003542,0.009202,0.012646,0.011521,0.008083,0.009035,0.015979,0.015229,0.012271,0.009410,0.006729,0.014563]},{"w":"predicate in the DELETE statement causes all other rows to be deleted.","p":[0.143202,0.642771,0.728702,0.642771,0.728702,0.627676,0.143202,0.627676,0.011250,0.007813,0.008875,0.010875,0.005708,0.008833,0.008292,0.006771,0.008083,0.005396,0.005521,0.010792,0.005083,0.006375,0.011521,0.008083,0.005417,0.015229,0.011979,0.011063,0.011813,0.012875,0.011229,0.005583,0.007146,0.006813,0.008292,0.006771,0.008646,0.017271,0.008687,0.010750,0.006000,0.005521,0.008833,0.008542,0.011312,0.007563,0.008937,0.006792,0.005542,0.008646,0.005271,0.004958,0.005500,0.010208,0.006375,0.011521,0.008771,0.007042,0.005417,0.007813,0.010042,0.014938,0.006792,0.005083,0.006771,0.009854,0.004875,0.011208,0.008083,0.005521,0.010979,0.008396,0.005729,0.008438,0.006771,0.008875,0.011417,0.002333]},{"w":"4.17 Deleting Records Referenced from Another Table","p":[0.143390,0.690489,0.801461,0.690489,0.801461,0.664776,0.143390,0.664776,0.016630,0.008259,0.014753,0.013890,0.008146,0.016555,0.015504,0.007170,0.014115,0.011938,0.007733,0.015767,0.014791,0.008146,0.015541,0.014791,0.011750,0.015954,0.009685,0.015579,0.010811,0.008146,0.015541,0.013890,0.010661,0.015354,0.009685,0.015354,0.015729,0.011750,0.014791,0.014828,0.006157,0.011224,0.009685,0.015954,0.022824,0.006457,0.017982,0.015729,0.014716,0.012125,0.015579,0.015354,0.008559,0.006419,0.014453,0.015729,0.016105,0.007170,0.012613]},{"w":"Problem","p":[0.144709,0.726563,0.228816,0.726563,0.228816,0.709899,0.144709,0.709899,0.013048,0.008073,0.013298,0.013423,0.005976,0.012797,0.017491]},{"w":"You want to delete records from one table when those records are referenced from","p":[0.143161,0.754132,0.856656,0.754132,0.856656,0.742656,0.143161,0.742656,0.011125,0.010458,0.010458,0.007243,0.014896,0.008938,0.010750,0.006000,0.007410,0.006771,0.009854,0.007847,0.010979,0.008396,0.005729,0.008438,0.006771,0.008083,0.007743,0.007813,0.008875,0.008792,0.010542,0.007833,0.011063,0.006792,0.007618,0.006292,0.007813,0.010417,0.016500,0.007826,0.010458,0.011563,0.008083,0.007410,0.006813,0.008479,0.010750,0.005729,0.008083,0.007243,0.014458,0.011521,0.008687,0.010792,0.007410,0.006375,0.011521,0.010708,0.007563,0.008083,0.007743,0.007813,0.008875,0.008792,0.010542,0.007833,0.011063,0.006792,0.007868,0.009021,0.007813,0.008083,0.007743,0.007813,0.008646,0.006375,0.008771,0.007813,0.008688,0.011583,0.008792,0.008875,0.010208,0.007618,0.006292,0.007813,0.010417,0.016021]},{"w":"some other table. Consider the following table, named DEPT","p":[0.143718,0.777069,0.669426,0.777069,0.669426,0.761704,0.143718,0.761704,0.007563,0.010417,0.017271,0.008083,0.007911,0.010208,0.006375,0.011521,0.008771,0.007042,0.007495,0.006813,0.008479,0.010750,0.005729,0.009292,0.003542,0.008057,0.013708,0.010458,0.011646,0.007458,0.005708,0.010979,0.008771,0.007042,0.007495,0.006375,0.011521,0.008083,0.007703,0.006375,0.010167,0.005271,0.005729,0.010042,0.014750,0.005521,0.011396,0.009146,0.007495,0.006813,0.008479,0.010750,0.005729,0.009000,0.003833,0.007745,0.011604,0.008896,0.017271,0.008875,0.010208,0.007828,0.015229,0.012062,0.011479,0.011750]},{"w":"_ACCIDENTS, which","p":[0.669946,0.774974,0.856712,0.774974,0.856712,0.761704,0.669946,0.761704,0.010833,0.014313,0.013854,0.013729,0.007000,0.015229,0.011646,0.015646,0.013146,0.009917,0.003833,0.007328,0.014458,0.011417,0.005708,0.008396,0.010313]},{"w":"contains one row for each accident that occurs in a manufacturing business. Each row","p":[0.143650,0.796116,0.857025,0.796116,0.857025,0.780751,0.143650,0.780751,0.008792,0.010458,0.010750,0.006813,0.009000,0.005521,0.011646,0.006792,0.005500,0.010458,0.011562,0.008083,0.005417,0.007813,0.010042,0.014083,0.005292,0.006375,0.010542,0.007042,0.005500,0.008896,0.009125,0.008396,0.010750,0.005542,0.009125,0.008812,0.008688,0.005708,0.010979,0.008687,0.010750,0.006000,0.005083,0.006375,0.011562,0.008292,0.006000,0.005500,0.010646,0.008812,0.008625,0.011146,0.007896,0.006792,0.005396,0.005521,0.010792,0.005542,0.008333,0.005292,0.017312,0.008938,0.011000,0.011021,0.006417,0.009125,0.008375,0.006604,0.011146,0.007708,0.005521,0.011396,0.009146,0.004875,0.011042,0.011312,0.007458,0.005521,0.011562,0.008938,0.007646,0.008000,0.003542,0.005333,0.012042,0.009125,0.008396,0.010750,0.005417,0.007813,0.010042,0.014313]},{"w":"records the department in which an accident occurred and also the type of accident.","p":[0.143545,0.815164,0.839108,0.815164,0.839108,0.799799,0.143545,0.799799,0.007813,0.008875,0.008792,0.010542,0.007833,0.011063,0.006792,0.005083,0.006375,0.011521,0.008083,0.005521,0.010979,0.008438,0.011375,0.009021,0.007396,0.006562,0.017271,0.008688,0.010750,0.006000,0.005396,0.005521,0.010792,0.004917,0.014458,0.011417,0.005708,0.008396,0.010750,0.005542,0.008937,0.010792,0.005542,0.009125,0.008812,0.008688,0.005708,0.010979,0.008688,0.010750,0.006000,0.005500,0.010646,0.008812,0.008625,0.011146,0.007729,0.007813,0.008875,0.010208,0.005542,0.008938,0.011583,0.010208,0.005542,0.008646,0.005813,0.007562,0.009854,0.005083,0.006375,0.011521,0.008083,0.005083,0.006021,0.009896,0.011333,0.008083,0.005500,0.010417,0.005604,0.005542,0.009125,0.008812,0.008688,0.005708,0.010979,0.008688,0.010750,0.007208,0.002333]},{"w":"create table dept","p":[0.177333,0.840149,0.319472,0.840149,0.319472,0.829124,0.177333,0.829124,0.009191,0.007454,0.008652,0.008298,0.008348,0.007910,0.009040,0.008567,0.008736,0.007994,0.008348,0.007910,0.008905,0.008483,0.008972,0.007977,0.007353]},{"w":"_accidents","p":[0.320079,0.840149,0.403291,0.840149,0.403291,0.829124,0.320079,0.829124,0.009040,0.008433,0.008433,0.008298,0.008298,0.008483,0.008972,0.007977,0.008736,0.006544]},{"w":"( deptno ","p":[0.178176,0.855633,0.252484,0.855633,0.252484,0.844338,0.178176,0.844338,0.006847,0.008905,0.008483,0.008972,0.007977,0.008888,0.007859,0.007943,0.008433]},{"w":"integer,","p":[0.320551,0.855607,0.384824,0.855607,0.384824,0.844672,0.320551,0.844672,0.008888,0.007977,0.008348,0.008466,0.008399,0.009411,0.009057,0.003727]},{"w":" ","p":[0.176591,0.868881,0.185024,0.868881,0.185024,0.868868,0.176591,0.868868,0.008433]},{"w":"accident","p":[0.194198,0.869009,0.260444,0.869009,0.260444,0.859963,0.194198,0.859963,0.008433,0.008433,0.008298,0.008298,0.008483,0.008972,0.007977,0.007353]},{"w":"_name ","p":[0.261051,0.870988,0.311512,0.870988,0.311512,0.862687,0.261051,0.862687,0.009360,0.008112,0.008180,0.008466,0.007910,0.008433]},{"w":"varchar(20) )","p":[0.320180,0.871052,0.428016,0.871052,0.428016,0.859757,0.320180,0.859757,0.008939,0.009191,0.007674,0.008753,0.008112,0.009191,0.008517,0.007572,0.008298,0.009276,0.006999,0.009866,0.005447]},{"w":"4.17 Deleting Records Referenced from Another Table ","p":[0.489567,0.938082,0.805924,0.938082,0.805924,0.925850,0.489567,0.925850,0.007911,0.003929,0.007018,0.006607,0.003875,0.007875,0.007375,0.003411,0.006714,0.005679,0.003679,0.007500,0.007036,0.003875,0.007393,0.007036,0.005589,0.007589,0.004607,0.007411,0.005143,0.003875,0.007393,0.006607,0.005071,0.007304,0.004607,0.007304,0.007482,0.005589,0.007036,0.007054,0.002929,0.005339,0.004607,0.007589,0.010857,0.003071,0.008554,0.007482,0.007000,0.005768,0.007411,0.007304,0.004071,0.003054,0.006875,0.007482,0.007661,0.003411,0.006500,0.002821]},{"w":"| ","p":[0.822103,0.938762,0.827532,0.938762,0.827532,0.925170,0.822103,0.925170,0.002607,0.002821]},{"w":"87","p":[0.842996,0.935469,0.856532,0.935469,0.856532,0.926422,0.842996,0.926422,0.007536,0.006000]}]};