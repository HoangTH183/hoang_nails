<?php

namespace App\Http\Controllers\Api\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Appointment\Create;
use App\Repositories\Appointment\AppointmentEloquentRepository;
use App\Repositories\Appointment\AppointmentRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AppointmentController extends Controller
{
    /***
     * @var AppointmentRepositoryInterface | AppointmentEloquentRepository
     */
    private $appointmentRepository;

    public function __construct(AppointmentRepositoryInterface $appointmentRepository)
    {
        $this->appointmentRepository = $appointmentRepository;
    }

    public function index(Request $request)
    {

        $filter = $request->all();

        $filter['salon_id'] = Auth::guard('company')->user()->salon_id;


        $appointments = $this->appointmentRepository->getByFilter($filter);

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'appointments' => $appointments,
            ]
        ]);
    }

    public function store(Create $request)
    {
        $data = $request->all();

        $data['salon_id'] = Auth::guard('company')->user()->salon_id;
        $data['start_time'] = $data['appointment_date'].' '.$data['start_time'].':00';
        $data['end_time'] = $data['appointment_date'].' '.$data['end_time'].':00';


        $item = $this->appointmentRepository->create($data);


        return response()->json([
            'message' => 'Add success',
            'data' => [
                'appointment' => $item,
            ]
        ]);
    }

    public function show($id)
    {

        $item = $this->appointmentRepository->find($id);

        return response()->json([
            'message' => 'Add success',
            'data' => [
                'appointment' => $item,
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();

        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $item = $this->appointmentRepository->update($id, $data);


        return response()->json([
            'message' => 'Update success',
            'data' => [
                'appointment' => $item,
            ]
        ]);
    }

    public function destroy($id)
    {
        $item = $this->appointmentRepository->find($id);

        if ($item->salon_id != Auth::guard('company')->user()->salon_id) {
            throw new NotFoundHttpException();
        }

        $item->delete();

        return response()->json([
            'message' => 'Delete success',
            'data' => [
            ]
        ]);
    }
}

