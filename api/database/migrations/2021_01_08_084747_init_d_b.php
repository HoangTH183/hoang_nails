<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InitDB extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $sqls = file_get_contents(storage_path('my/nails.sql'));

        \Illuminate\Support\Facades\DB::unprepared($sqls);
//        $aSql = explode(';', $sqls);
//
//        foreach ($aSql as $each) {
//            try {
//                \Illuminate\Support\Facades\DB::statement($each);
//            } catch (\Exception $exception) {
//
//            }
//
//        }


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
