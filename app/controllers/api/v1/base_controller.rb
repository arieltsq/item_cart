class Api::V1::BaseController < ApplicationController
#respond to  will ensure that all actions from the controller, # #which inherit from the base controller, will responde with JSON
# standard approach for building JSON based APIs
  respond_to :json

end
