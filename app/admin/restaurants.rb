ActiveAdmin.register Restaurant do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :name, :phone_number, :street_address, :city, :state, :zip, :website, :description, :open_time, :close_time, :price_range, :capacity, :cuisines, :owner_id, :ratings, :lat, :lng
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :phone_number, :street_address, :city, :state, :zip, :website, :description, :open_time, :close_time, :price_range, :capacity, :cuisines, :owner_id, :ratings, :lat, :lng]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  permit_params :owner_id, :name, :phone_number, :street_address, :city, :state, :zip, :website, :description, :open_time, :close_time, :capacity, :cuisines, :ratings, :lat, :lng, :main_photo, :photos

  member_action :delete_restaurant_image, method: :delete do
    @pic = ActiveStorage::Attachment.find(params[:id])
    @pic.purge_later
    redirect_back(fallback_location: edit_admin_restaurant_path)   
  end

  form do |f|
    f.semantic_errors
    fieldset class: 'inputs' do
      ol do
        f.input :owner, as: :select, collection: User.all.map{|u| ["#{u.first_name} #{u.last_name}", u.id]}
        f.input :name
        f.input :phone_number
        f.input :street_address
        f.input :city
        f.input :state
        f.input :zip
        f.input :website
        f.input :description
        f.input :open_time
        f.input :close_time
        f.input :capacity
        f.input :cuisines
        f.input :ratings
        f.input :lat
        f.input :lng
        f.inputs "Main Photo", multipart: true do 
          f.input :main_photo, as: :file
        end
        f.inputs "photos", multipart: true do 
          f.input :photos, as: :file
        end
        if f.object.photos.attached?
          f.object.photos.each do |photo|
            div class: "restaurantImageShow" do
              span image_tag url_for(photo)
              span link_to "delete", delete_restaurant_image_admin_restaurant_path(photo.id),method: :delete,data: { confirm: 'Are you sure?' }
            end
          end
        end
        f.actions
      end
    end
  end

  index do
    column :id
    column :name
    column :phone_number
    column :street_address
    column :city
    column :state
    column :zip
    column :website
    column :open_time
    column :close_time
    column :capacity
    column :cuisines
    column :owner
    column :ratings
    column :created_at
    column :updated_at
    actions
  end

  show do
    attributes_table do
      row :name
      row :phone_number
      row :street_address
      row :city
      row :state
      row :zip
      row :website
      row :description
      row :open_time
      row :close_time
      row :price_range
      row :capacity
      row :cuisines
      row :owner
      row :ratings
      row :lat
      row :lng
      row :created_at
      row :updated_at
      row "Main Photo" do |p|
        div class: 'restaurantImageShow' do
          image_tag url_for(p.main_photo)
        end
      end
      row "photos" do |p|
        p.photos.each do |photo|
          div class: 'restaurantImageShow' do
            image_tag url_for(photo)
          end
        end
      end
    end
  end
end
